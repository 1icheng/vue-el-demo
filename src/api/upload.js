import axios from "./axios.js";
//正常上传
const uploadNormal = (url, data, headers = {}) => {
  return new Promise((resolve, reject) => {
    axios({
      url,
      method: "post",
      data,
      headers: {
        ...headers,
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => {
        return resolve(res.data);
      })
      .catch((err) => {
        return reject(err);
      });
  });
};
//分片上传
const uploadByPieces = async (url, file) => {
  console.log(file, "file");
  // 上传过程中用到的变量
  const chunkSize = 5 * 1024 * 1024; // 5MB一片
  const chunkCount = Math.ceil(file.file.size / chunkSize); // 总片数
  // 获取当前chunk数据
  const getChunkInfo = (file, index) => {
    let start = index * chunkSize;
    let end = Math.min(file.file.size, start + chunkSize);
    let chunk = file.file.slice(start, end);
    return { start, end, chunk };
  };
  // 分片上传接口
  const uploadChunk = (data) => {
    return new Promise((resolve, reject) => {
      axios({
        url,
        method: "post",
        data,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
        .then((res) => {
          return resolve(res.data);
        })
        .catch((err) => {
          return reject(err);
        });
    });
  };
  // 针对单个文件进行chunk上传
  const readChunk = (index) => {
    const { chunk } = getChunkInfo(file, index);
    let fetchForm = new FormData();
    fetchForm.append("file", chunk);
    fetchForm.append("index", index);
    fetchForm.append("chunkCount", chunkCount);
    return uploadChunk(fetchForm);
  };
  // 针对每个文件进行chunk处理
  const promiseList = [];
  try {
    for (let index = 0; index < chunkCount; ++index) {
      promiseList.push(readChunk(index));
    }
    const res = await Promise.all(promiseList);
    return res;
  } catch (e) {
    return e;
  }
};

export { uploadNormal, uploadByPieces };
