const video = document.getElementById('video')
const context = document.getElementById("context")
let predictedAges = []
let gender = []
let attendance = []

Promise.all([
  faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
  faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
  faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
  faceapi.nets.faceExpressionNet.loadFromUri('/models'),
  faceapi.nets.ageGenderNet.loadFromUri('/models'),
  faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
  faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
  faceapi.nets.ssdMobilenetv1.loadFromUri('/models')
]).then(startVideo)

function startVideo() {
  const video = document.getElementById('video')
  navigator.getUserMedia(
     { video: {} },
     stream => video.srcObject = stream,
     err => console.err(err)
  )
}
video.addEventListener('play', () => {
  const canvas = faceapi.createCanvasFromMedia(video)
  document.body.append(canvas)
  const displaySize = { width: video.width + 300, height: video.height }
  faceapi.matchDimensions(canvas, displaySize)
  setInterval(async () => {
    const detections = await faceapi
    .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
    .withFaceLandmarks()
    .withFaceExpressions()
    .withAgeAndGender()
    const resizedDetections = faceapi.resizeResults(detections, displaySize)
    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
    faceapi.draw.drawDetections(canvas, resizedDetections)
    faceapi.draw. drawFaceLandmarks(canvas, resizedDetections)
    faceapi.draw.drawFaceExpressions(canvas, resizedDetections)
    const age = resizedDetections[0].age
    const gender = resizedDetections[0].gender
    const topLeft = {
      x: resizedDetections[0].detection.box.topLeft.x,
      y: resizedDetections[0].detection.box.topLeft.y
    }
    const bottomRight = {
      x: resizedDetections[0].detection.box.bottomRight.x,
      y: resizedDetections[0].detection.box.bottomRight.y
    }
    const topRight = {
      x: resizedDetections[0].detection.box.topRight.x,
      y: resizedDetections[0].detection.box.topRight.y
    }
    new faceapi.draw.DrawTextField(
      gender,
      topRight
    ).draw(canvas)
    new faceapi.draw.DrawTextField(
      [`${faceapi.utils.round(age, 0)} year`],
      bottomRight
    ).draw(canvas)
    new faceapi.draw.DrawTextField(
      "HoangNam",
      topLeft
      ).draw(canvas)
  }, 100)
})

function interpolateAgePrediction(age) {
  predictedAges = [age].concat(predictedAges).slice(0,30);
  const avgPre = predictedAges.reduce((total,a)=> total+a)/ predictedAges.length;
  return avgPre
}

document.getElementById('btn_snap').addEventListener("click", ()=>{
  const img = document.getElementById("face_img")
  const container = document.getElementById("confirm")
  var getContext = context.getContext('2d')
  getContext.drawImage(video,0,0,560,560);
  imgDataURL = context.toDataURL("image/png");
  img.setAttribute('src', imgDataURL )
  img.addEventListener('click', async () => {
    var confirm_box = document.getElementById('confirm')
    confirm_box.style.display = "flex"
  })

  document.getElementById('btn_another').addEventListener("click", () => {
    var confirm_box = document.getElementById('confirm')
      confirm_box.style.display = "none"
  })

  document.getElementById('btn_use').addEventListener("click", async () => {
    const LabeledFaceDescriptors = await loadLabeledImages()
    const faceMatcher = new faceapi.FaceMatcher(LabeledFaceDescriptors, 0.6)
    const canvas = faceapi.createCanvasFromMedia(img)
    canvas.setAttribute('id', 'detect')
    container.append(canvas)
    var detect_image = document.getElementById("detect")
    detect_image.style.left = "82px"
    detect_image.style.top = "40px"
   
    const displaySize = {width:video.width, height:video.height}
    const detections = await faceapi.detectAllFaces(img)
    .withFaceLandmarks()
    .withFaceDescriptors()
    const resizedDetections = faceapi.resizeResults(detections,displaySize)
    const results = resizedDetections.map( d => faceMatcher.findBestMatch(d.descriptor))
    results.forEach((result, i) => {
      const box = resizedDetections[i].detection.box
      const drawBox = new faceapi.draw.DrawBox(box, { label: result.toString() })
      console.log(result.label)
      attendance.push(result.label)
      drawBox.draw(canvas)
      })
  })
})

function loadLabeledImages() {
  const labels = ['Lê Tiến Đạt - 1234', 'Nguyễn Tấn Dũng - 3306', 'Phạm Hoàng Nam - 3780', 'Võ Quốc Trung - 3728']
  return Promise.all(
    labels.map(async label => {
      const descriptions = []
      for (let i = 1; i <= 8; i++) {
        try{
          const img = await faceapi.fetchImage(`/models/labeled_images/${label}/${i}.jpg`)
          const detections = await faceapi.detectSingleFace(img).withFaceLandmarks().withFaceDescriptor()
          descriptions.push(detections.descriptor)
        }catch(err) {
          console.log(err)
          break
        } 
      }
      return new faceapi.LabeledFaceDescriptors(label, descriptions)
    })
  )
}

// function saveData(fileName, data) {
//   fileManager.createNewFile("temp.txt")
//   fs.writeFile(fileName, data , (err, data) => {
//       if(err) throw err;
//       console.log("Saved to success")
//   })
// }
