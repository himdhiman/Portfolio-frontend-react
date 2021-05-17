(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{52:function(e){e.exports=JSON.parse('{"skills":[{"name":"C","svgsrc":"c.svg"},{"name":"C++","svgsrc":"cpp.svg"},{"name":"Python","svgsrc":"python3.svg"},{"name":"Numpy","svgsrc":"numpy.svg"},{"name":"Pandas","svgsrc":"pandas.svg"},{"name":"Matplotlib","svgsrc":"matplotlib.svg"},{"name":"OpenCV","svgsrc":"opencv-icon.svg"},{"name":"Sklearn","svgsrc":"sklearn.svg"},{"name":"TensorFlow","svgsrc":"tensorflow.svg"},{"name":"Keras","svgsrc":"keras.svg"},{"name":"Darknet","svgsrc":"darknet.svg"},{"name":"Django","svgsrc":"django.svg"},{"name":"restFramework","svgsrc":"restframework.png"},{"name":"Channels","svgsrc":"channels.png"},{"name":"PostgreSQL","svgsrc":"postgresql.svg"},{"name":"redis","svgsrc":"redis.png"},{"name":"celery","svgsrc":"celery.png"},{"name":"docker","svgsrc":"docker.png"},{"name":"JavaScript","svgsrc":"javascript.svg"},{"name":"HTML5","svgsrc":"html5.svg"},{"name":"CSS3","svgsrc":"css3.svg"},{"name":"React","svgsrc":"react.svg"},{"name":"Redux","svgsrc":"redux.svg"},{"name":"Axios","svgsrc":"axios.svg"},{"name":"WebPack","svgsrc":"webpack.svg"}]}')},58:function(e){e.exports=JSON.parse('{"projects":[{"projectname":"Dirty Bits","description":"An Online Coding Platform","frameworks":"Django React","projectlink":"https://github.com/himdhiman/DirtyBits","imagesrc":"coding.jpg","link":"/covid"},{"projectname":"Civid-19 Detection Using Chest Xrays","description":"HeatMaps are generated to detect the infectious region","frameworks":"TensorFlow","projectlink":"https://github.com/himdhiman/Covid-19-Detection","imagesrc":"background2.jpeg","link":"/covid"},{"projectname":"Music Generation","description":"RNN\'s are used to Generate Piano Music","frameworks":"TensorFlow","projectlink":"https://github.com/himdhiman/MusicGeneration","imagesrc":"music.jpg","link":"/musicgeneration"},{"projectname":"Caption Bot","description":"Image Captioning Project using Ateention based Archeitecture","frameworks":"TensorFlow","projectlink":"https://github.com/himdhiman/CaptionBot","imagesrc":"caption.png","link":"/captionbot"},{"projectname":"Sentiment Analysis","description":"This model Predicts the Sentiment of a Given Sentence.","frameworks":"TensorFlow","projectlink":"https://github.com/himdhiman/SentimentAnalysis","imagesrc":"sentiment-analysis.jpg","link":"/sentimentanalysis"},{"projectname":"Book My Show Clone","description":"Clone Of BMS","frameworks":"Django HTML CSS JavaScript","projectlink":"https://book-my-show-clone.herokuapp.com/","imagesrc":"bookmyshow.jpeg","link":"/covid"},{"projectname":"Ship Detection From SAR Images","description":"Detect Ships from Given SAR Images.","frameworks":"Django JavaScript YoloV3","projectlink":"https://github.com/himdhiman/SIH-2020-Ship_Detection-Project-ISRO","imagesrc":"ship.jfif","link":"/covid"},{"projectname":"Face Detection","description":"Face Detection using OpenCV.","frameworks":"OpenCV","projectlink":"https://github.com/himdhiman/Face-Features-Live","imagesrc":"face.jpg","link":"/covid"},{"projectname":"Human Detection","description":"RCNN\'s are used to detect the people.","frameworks":"Django TensorFlow","projectlink":"https://github.com/himdhiman/RCNN---HumanDetection","imagesrc":"HD.png","link":"/covid"}]}')},84:function(e,t,i){},85:function(e,t,i){},86:function(e,t,i){},87:function(e,t,i){},88:function(e,t,i){"use strict";i.r(t);var n=i(1),c=i(38),s=i.n(c),a=i(14),r=i(2),o=i(0);var d=function(e){var t=e.skills.map((function(e){var t="/Portfolio-frontend-react/public/assets/Homepage/images/skills/"+e.svgsrc;return Object(o.jsx)("img",{src:t,id:"skill-img",alt:""},e.name)}));return Object(o.jsx)("div",{className:"ui equal width centered grid",children:Object(o.jsx)("div",{className:"ui small images",children:t})})};var l=function(){var e=i(52);return Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{id:"heading",children:"Skills"}),Object(o.jsx)(d,{skills:e.skills})]})};var j=function(e){var t=e.projects.map((function(e){var t="/Portfolio-frontend-react/assets/Homepage/images/projects/"+e.imagesrc;return Object(o.jsx)("div",{children:Object(o.jsx)("div",{className:"column",id:"project-card",children:Object(o.jsx)("div",{className:"ui segment",children:Object(o.jsxs)("div",{className:"ui card",children:[Object(o.jsx)("div",{className:"image",children:Object(o.jsx)("img",{id:"card-img",src:t,alt:""})}),Object(o.jsx)("div",{className:"content",children:Object(o.jsx)("div",{className:"header",children:e.projectname})}),Object(o.jsx)("div",{className:"meta",children:e.description}),Object(o.jsx)("div",{className:"extra content",children:e.frameworks}),Object(o.jsx)("div",{className:"extra content",children:Object(o.jsx)(a.b,{to:e.link,children:"Project Demo"})})]})})})},e.projectname)}));return Object(o.jsx)("div",{className:"ui segment",id:"project-card-container",children:Object(o.jsx)("div",{className:"ui equal width centered grid",children:t})})};var m=function(){var e=i(58);return Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{id:"heading",children:"Projects"}),Object(o.jsx)(j,{projects:e.projects})]})},u=i(3),h=i(40),b=i.n(h),p=function(){var e=Object(n.useState)(0),t=Object(u.a)(e,2),i=t[0],c=t[1],s=Object(n.useRef)(null);return Object(n.useEffect)((function(){return i||c(b()({el:s.current,mouseControls:!0,touchControls:!0,gyroControls:!1,minHeight:200,minWidth:200,scale:1,scaleMobile:1,color:12957883,backgroundColor:1907234,maxDistance:19,spacing:20})),function(){i&&i.destroy()}}),[i]),Object(o.jsx)("div",{ref:s,id:"effect",children:Object(o.jsx)("div",{id:"HomePage-head-div",children:Object(o.jsx)("h1",{id:"header",children:"Himanshu Dhiman"})})})};var g=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{id:"heading",children:"About"}),Object(o.jsx)("p",{id:"main",children:"An Deep Learning Enthusiastic Geek."}),Object(o.jsx)("h3",{id:"sub-heading",children:Object(o.jsx)("b",{children:"Higher Eduction"})}),Object(o.jsx)("p",{id:"sub-heading-text",children:"Currently Persuing Bachelors of Engineering (B.E.) from Netaji Subhas Institute of Technology in Electronics and Communication Engineering (ECE)."}),Object(o.jsx)("h3",{id:"sub-heading",children:Object(o.jsx)("b",{children:"High School"})}),Object(o.jsx)("p",{id:"sub-heading-text",children:"Completed my High School Education from Gyan Mandir Public School in 2018."})]})};var O=function(){return Object(o.jsxs)("div",{className:"ui inverted vertical footer segment",children:[Object(o.jsx)("div",{id:"footer-left",children:Object(o.jsx)("h5",{children:"Made With Love By Himanshu Dhiman"})}),Object(o.jsxs)("div",{id:"footer-right",children:[Object(o.jsx)("a",{href:"https://github.com/himdhiman",children:Object(o.jsx)("i",{className:"github icon",id:"footer-icon"})}),Object(o.jsx)("a",{href:"https://www.linkedin.com/in/himanshu-dhiman-229020b5/",children:Object(o.jsx)("i",{className:"linkedin icon",id:"footer-icon"})}),Object(o.jsx)("a",{href:"https://www.facebook.com/himanshu.dhiman.313/",children:Object(o.jsx)("i",{className:"facebook icon",id:"footer-icon"})}),Object(o.jsx)("a",{href:"https://www.instagram.com/__himanshu_dhiman__/",children:Object(o.jsx)("i",{className:"instagram icon",id:"footer-icon"})})]})]})};var x=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(p,{}),Object(o.jsx)("br",{}),Object(o.jsx)(m,{}),Object(o.jsx)("br",{}),Object(o.jsx)(l,{}),Object(o.jsx)("br",{}),Object(o.jsx)("hr",{}),Object(o.jsx)("br",{}),Object(o.jsx)(g,{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)(O,{})]})},v=i.p+"static/media/confMatrix.ecdb8191.png",f=i.p+"static/media/lossPlot.7d356b35.png";var y=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{id:"heading",children:"About The Model"}),Object(o.jsxs)("b",{children:[Object(o.jsx)("img",{id:"plot-img",className:"ui medium left floated image",src:f,alt:""}),Object(o.jsx)("img",{id:"conf-img",className:"ui medium right floated image",src:v,alt:""}),Object(o.jsx)("p",{id:"main",children:"The model is an instance of deep Convolutional Neural Network(CNN). ImageNet model is trained on the Covid Dataset and transfer learning is used. For more detail about the architecture visit my github repository, links in the below section."}),Object(o.jsx)("p",{id:"main",children:"It has an accuracy of about 97% on the train and test datasets."})]})]})})},k=i(5),N=i.n(k),w=i(10),C=i(11),S=i.n(C),E=i.p+"static/media/Corona.b4b4f2d4.svg",I=i.p+"static/media/Recovered.2bc9a8c2.svg",B=i.p+"static/media/Mask.0543204a.svg";var D=function(){var e=Object(n.useState)(0),t=Object(u.a)(e,2),i=t[0],c=t[1],s=Object(n.useState)(0),a=Object(u.a)(s,2),r=a[0],d=a[1],l=Object(n.useState)(0),j=Object(u.a)(l,2),m=j[0],h=j[1],b=function(){var e=Object(w.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.get("https://api.covid19api.com/summary").then((function(e){c(e.data.Global.TotalConfirmed),h(e.data.Global.TotalRecovered),d(e.data.Global.TotalDeaths)}),(function(e){c("--"),h("--"),d("--")}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){b()})),Object(o.jsxs)("div",{className:"ui three column centered grid",children:[Object(o.jsx)("div",{className:"column",id:"covid-icon-column",children:Object(o.jsx)("img",{id:"covid-icons",src:E,alt:""})}),Object(o.jsx)("div",{className:"column",children:Object(o.jsx)("img",{id:"covid-icons",src:I,alt:""})}),Object(o.jsx)("div",{className:"column",children:Object(o.jsx)("img",{id:"covid-icons",src:B,alt:""})}),Object(o.jsx)("div",{className:"column",children:Object(o.jsx)("h1",{id:"covid-text",children:"Total cases"})}),Object(o.jsx)("div",{className:"column",children:Object(o.jsx)("h1",{id:"covid-text",children:"Fatal cases"})}),Object(o.jsx)("div",{className:"column",children:Object(o.jsx)("h1",{id:"covid-text",children:"Recovered cases"})}),Object(o.jsx)("div",{className:"column",children:Object(o.jsx)("h1",{id:"covid-text",children:i})}),Object(o.jsx)("div",{className:"column",children:Object(o.jsx)("h1",{id:"covid-text",children:r})}),Object(o.jsx)("div",{className:"column",children:Object(o.jsx)("h1",{id:"covid-text",children:m})})]})};var T=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{id:"heading",children:"Message"}),Object(o.jsxs)("b",{children:[Object(o.jsx)("p",{id:"main",children:"In this time of the global pandemic, I urge everyone to stay inside their home so as to protect themselves and other also. This is a time of great danger and we all can help each other by helping ourselves only."}),Object(o.jsx)("p",{id:"main",children:"This site is made with the purpose of spreading info about covid-19 and to establish a model that predict whether a person is affected with covid-19."}),Object(o.jsx)("p",{id:"main",children:"We all know that greatness in a disruptive era requires bold ambition,curious talent and a culture that believes that we are smarter together."})]}),Object(o.jsx)("section",{className:"module parallax parallax-3"})]})},F=i(16);var M=function(){var e="http://localhost:8000/",t=Object(n.useState)(null),i=Object(u.a)(t,2),c=i[0],s=i[1],a=Object(n.useState)(null),r=Object(u.a)(a,2),d=r[0],l=r[1],j=Object(n.useState)(e+"media/covid/imgdata/cam.png"),m=Object(u.a)(j,2),h=m[0],b=m[1],p=Object(n.useState)(!1),g=Object(u.a)(p,2),O=g[0],x=g[1],v=function(){var t=Object(w.a)(N.a.mark((function t(i){var n,s,a;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return x(!0),document.getElementById("predict-button").className="positive large ui button disabled",(n=new FormData).append("image",c),t.next=6,S.a.post(e+"covid/",n);case 6:s=t.sent,document.getElementById("heatmap-img").style.display="flex",a=s.data,document.getElementById("pred-result").innerHTML=a.message,x(!1),b(e+"media/covid/imgdata/cam.png?time="+(new Date).getTime()),document.getElementById("predict-button").className="positive large ui button","Covid-19 Negative"===a.message?document.getElementById("pred-result").style.color="green":document.getElementById("pred-result").style.color="red";case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(o.jsxs)("div",{children:[Object(o.jsx)("section",{className:"module parallax parallax-1"}),Object(o.jsx)("h1",{id:"heading",children:"Covid - 19 Prediction"}),Object(o.jsx)("p",{id:"main",children:"A CNN based Neural network is trained which take x-ray images to predict the patient as corona virus positive or negative."}),Object(o.jsxs)("div",{id:"file-input",children:[Object(o.jsx)("input",{type:"file",onChange:function(e){document.getElementById("uploaded-img").style.display="block",s(e.target.files[0]),l(URL.createObjectURL(e.target.files[0]))}}),Object(o.jsx)("button",{className:"positive large ui button",id:"predict-button",onClick:v,children:"Predict"}),Object(o.jsx)(F.FillSpinner,{id:"predict-loader",loading:O,color:"#893827"})]}),Object(o.jsxs)("div",{id:"result-div",children:[Object(o.jsx)("div",{children:Object(o.jsx)("img",{src:d,id:"uploaded-img",alt:""})}),Object(o.jsx)("div",{id:"heatmap-img",children:Object(o.jsx)("div",{children:Object(o.jsx)("img",{id:"heatmap-img-img",src:h,alt:"heatmap"})})}),Object(o.jsx)("div",{children:Object(o.jsx)("div",{children:Object(o.jsx)("h3",{id:"pred-result",children:" "})})})]}),Object(o.jsx)("section",{className:"module parallax parallax-2"})]})},H=i(43),P=i.n(H);var R=function(){return Object(o.jsx)("div",{children:Object(o.jsx)(a.b,{to:"/",children:Object(o.jsx)("button",{className:"big circular ui icon button",children:Object(o.jsx)("i",{className:"icon home"})})})})},A=function(){var e=Object(n.useState)(0),t=Object(u.a)(e,2),i=t[0],c=t[1],s=Object(n.useRef)(null);return Object(n.useEffect)((function(){return i||c(P()({el:s.current,mouseControls:!0,touchControls:!0,gyroControls:!1,minHeight:200,minWidth:200,scale:1,scaleMobile:1,color:12957883,backgroundColor:1907234,maxDistance:19,spacing:20})),function(){i&&i.destroy()}}),[i]),Object(o.jsxs)("div",{ref:s,id:"effect",children:[Object(o.jsx)("div",{id:"covid-head-div",children:Object(o.jsx)("h1",{id:"header",children:"Covid Detection Using Chest X-Rays"})}),Object(o.jsx)("div",{id:"home-btn",children:Object(o.jsx)(R,{})})]})};var L=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)(A,{}),Object(o.jsx)("br",{}),Object(o.jsx)(D,{}),Object(o.jsx)("br",{}),Object(o.jsx)(M,{}),Object(o.jsx)("br",{}),Object(o.jsx)(T,{}),Object(o.jsx)("br",{}),Object(o.jsx)(y,{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)(O,{})]})},G=i(44),J=i.n(G);var W=function(){var e=function(){var e=Object(w.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return document.getElementById("help-text").style.display="block",document.getElementById("download-file").style.display="none",document.getElementById("gen-btn").className="ui green button disabled",e.next=5,S.a.post("http://localhost:8000/musicgen/");case 5:document.getElementById("gen-btn").className="ui green button",document.getElementById("help-text").style.display="none",document.getElementById("download-file").style.display="block";case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{id:"music-btn",children:[Object(o.jsx)("button",{id:"gen-btn",className:"ui green button",onClick:e,children:"Generate Music ..."}),Object(o.jsx)("h5",{id:"help-text",children:"Plaese Wait .. It will take around 30 sec."})]}),Object(o.jsx)("a",{id:"download-file",href:"http://localhost:8000/media/music/output.mid",download:!0,children:"Click to download"})]})},_=function(){var e=Object(n.useState)(0),t=Object(u.a)(e,2),i=t[0],c=t[1],s=Object(n.useRef)(null);return Object(n.useEffect)((function(){return i||c(J()({el:s.current,mouseControls:!0,touchControls:!0,gyroControls:!1,minHeight:200,minWidth:200,baseColor:792630,backgroundColor:723724,amplitudeFactor:3,xOffset:.17,yOffset:-.05})),function(){i&&i.destroy()}}),[i]),Object(o.jsxs)("div",{ref:s,id:"music-effect",children:[Object(o.jsx)("div",{id:"covid-head-div",children:Object(o.jsx)("h1",{id:"music-header",children:"Music Generation"})}),Object(o.jsx)("div",{id:"music-home-btn",children:Object(o.jsx)(R,{})}),Object(o.jsx)("div",{children:Object(o.jsx)(W,{})})]})};i(84);var U=function(){return Object(o.jsx)("div",{children:Object(o.jsx)(_,{})})},q=i.p+"static/media/smiley.0dc6ad75.png";var V=function(){var e=Object(n.useState)("Enter The text"),t=Object(u.a)(e,2),i=t[0],c=t[1],s=function(){var e=Object(w.a)(N.a.mark((function e(){var t,n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.post("http://localhost:8000/sentiment/",{sentiment:i});case 2:t=e.sent,n=t.data,document.getElementById("pos").innerHTML="Positive : "+n.positive,document.getElementById("neu").innerHTML="Neutral : "+n.neutral,document.getElementById("neg").innerHTML="Negative : "+n.negative,console.log(t.data);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{id:"sentiment-heading-div",children:[Object(o.jsx)("h1",{id:"sentiment-heading",children:"Sentiment Analysis"}),Object(o.jsx)("img",{id:"smile",src:q,alt:"smile"})]}),Object(o.jsx)("div",{id:"sentiment-homebtn",children:Object(o.jsx)(R,{})}),Object(o.jsxs)("div",{id:"header2",className:"ui icon input","data-children-count":"1",children:[Object(o.jsx)("input",{type:"text",placeholder:i,name:"sentiment",id:"my_input",onChange:function(e){return c(e.target.value)}}),Object(o.jsxs)("button",{className:"ui basic button",onClick:s,children:[Object(o.jsx)("i",{className:"smile outline icon"}),"Analyze"]})]}),Object(o.jsx)("br",{}),Object(o.jsxs)("div",{id:"sentiment-out",children:[Object(o.jsxs)("div",{className:"ui segment",id:"out-segment",children:[Object(o.jsx)("i",{className:"smile outline icon"}),Object(o.jsx)("p",{id:"pos",children:"NA"})]}),Object(o.jsxs)("div",{className:"ui segment",id:"out-segment",children:[Object(o.jsx)("i",{className:"meh outline icon"}),Object(o.jsx)("p",{id:"neu",children:"NA"})]}),Object(o.jsxs)("div",{className:"ui segment",id:"out-segment",children:[Object(o.jsx)("i",{className:"frown outline icon"}),Object(o.jsx)("p",{id:"neg",children:"NA"})]})]})]})};i(85);var X=function(){return Object(o.jsx)("div",{children:Object(o.jsx)(V,{})})};i(86);var z=function(){var e=Object(n.useState)(null),t=Object(u.a)(e,2),i=t[0],c=t[1],s=Object(n.useState)(null),a=Object(u.a)(s,2),r=a[0],d=a[1],l=Object(n.useState)(!1),j=Object(u.a)(l,2),m=j[0],h=j[1],b=function(){var e=Object(w.a)(N.a.mark((function e(t){var n,c,s;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),document.getElementById("predict-button").className="positive large ui button disabled",(n=new FormData).append("image",i),e.next=6,S.a.post("http://localhost:8000/captionbot/",n);case 6:c=e.sent,s=c.data,document.getElementById("predict-button").className="positive large ui button",h(!1),document.getElementById("pred-result").innerHTML=s.message;case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{id:"file-input",children:[Object(o.jsx)("input",{type:"file",onChange:function(e){document.getElementById("uploaded-img").style.display="block",c(e.target.files[0]),d(URL.createObjectURL(e.target.files[0]))}}),Object(o.jsx)("button",{className:"positive large ui button",id:"predict-button",onClick:b,children:"Predict"}),Object(o.jsx)(F.FillSpinner,{id:"predict-loader",loading:m,color:"#893827"})]}),Object(o.jsxs)("div",{id:"result-div",children:[Object(o.jsx)("div",{children:Object(o.jsx)("img",{src:r,id:"uploaded-img",alt:""})}),Object(o.jsx)("div",{children:Object(o.jsx)("h3",{id:"pred-result",children:" "})})]})]})};var K=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{id:"caption-header-div",children:[Object(o.jsx)("h1",{id:"caption-heading",children:"Caption Bot"}),Object(o.jsx)("div",{id:"caption-home",children:Object(o.jsx)(R,{})})]}),Object(o.jsx)(z,{})]})};i(87);var Q=function(){return Object(o.jsx)(n.Fragment,{children:Object(o.jsxs)(a.a,{basename:"/Portfolio-frontend-react",children:[Object(o.jsx)(r.a,{path:"/",exact:!0,component:x}),Object(o.jsx)(r.a,{path:"/covid",exact:!0,component:L}),Object(o.jsx)(r.a,{path:"/musicgeneration",exact:!0,component:U}),Object(o.jsx)(r.a,{path:"/sentimentanalysis",exact:!0,component:X}),Object(o.jsx)(r.a,{path:"/captionbot",exact:!0,component:K})]})})};s.a.render(Object(o.jsx)(Q,{}),document.querySelector("#root"))}},[[88,1,2]]]);
//# sourceMappingURL=main.19429bb5.chunk.js.map