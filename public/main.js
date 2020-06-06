console.log("这是main.js");

let getCSS = document.querySelector("#getCSS");
let getJS = document.querySelector("#getJS");
let getHTML = document.querySelector("#getHTML");
let getXML = document.querySelector("#getXML");
let getJSON = document.querySelector("#getJSON");
let getPage = document.querySelector("#getPage");
let n = 1;
//下一页
getPage.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", `/page${n + 1}`);
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const arry = JSON.parse(request.response);
      let dataList = document.querySelector("#dataList");
      arry.forEach((element) => {
        let li = document.createElement("li");
        li.textContent = element.id;
        dataList.appendChild(li);
      });
      n += 1;
    }
  };

  request.send();
};
//请求json
getJSON.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/5.json");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const object = JSON.parse(request.response);
      document.querySelector("#myName").textContent = object.name;
      console.log(object);
    }
  };

  request.send();
};
//请求xml
getXML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/4.xml");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const dom = request.responseXML;
      const text = dom.getElementsByTagName("warning")[0].textContent;
      console.log(text.trim());
    }
  };
  request.send();
};
//请求html
getHTML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/3.html");
  request.onload = () => {
    const div = document.createElement("div");
    div.innerHTML = request.response;
    document.body.appendChild(div);
  };
  request.onerror = () => {
    console.log("失败了");
  };
  request.send();
};
//请求js
getJS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/2.js");
  request.onload = () => {
    const script = document.createElement("script");
    script.innerHTML = request.response;
    document.body.appendChild(script);
  };
  request.onerror = () => {
    console.log("失败了");
  };
  request.send();
};
//请求css
getCSS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/style.css");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
    }
  };

  request.onload = () => {
    const style = document.createElement("style");
    style.innerHTML = request.response;
    document.head.appendChild(style);
  };
  request.onerror = () => {
    console.log("失败了");
  };
  request.send();
};
