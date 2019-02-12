/**
 * Read the content of a file
 * @param {String} filePath 
 * @param {Function} callback 
 */
export const readFile = (filePath) => {
  return new Promise((res, rej) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', filePath, true);
    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          res(this.responseText);
        } else {
          rej();
        }
      }
    };
    xhr.send();
  });
};
