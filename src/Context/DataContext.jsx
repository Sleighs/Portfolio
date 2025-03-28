import React, {useState} from "react";
// import { db } from '../firebase';

const DataContext = React.createContext();

function DataContextProvider(props){ 
  const [pageLocation, setPageLocation] = useState('home');
  const [projectsToDisplay, setProjectsToDisplay] = useState([ 
    'chatplus',
    'realitycalc', 
    'heromatchups', 
    'mint', 
    'cashflow',
    //'yt-playlist-webscraper',
    'yt-playlist-downloader',
  ]);
  const [isOpen, setIsOpen] = useState(false); 
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: [],
    website: '',
    budget: '', 
    message: '',
  })
  const [dataSent, setDataSent] = useState(false)
  const [sparkleCount, setSparkleCount] = useState(14)
  const [sparkleSize, setSparkleSize] = useState(Math.random() * 2 + 1)

  const toggleForm = () => {
    setIsOpen(prevState => !prevState);
  }

  function handleProjectFormSubmit(event) {
    // Make a unique name for the message
    var d = new Date();
    var msgName = String(formData.name + '-' + d.getTime());

    // Get date of message
    var date = String( d.getMonth() + 1) + '-' + String( d.getDate()) + '-' + String(d.getFullYear())

    // Get time of message
    var minutes = ()=>{
      var a;
      if (d.getMinutes() < 10) {
        a = String('0' + d.getUTCMinutes());
      } else {
        a = String(d.getUTCMinutes());
      }

      return a;
    }

    var time = String(d.getHours()) + ':' + minutes() + '.' + String(d.getSeconds());
    
    // Make new id
    var id = makeid(10);

    // Add message to database
    // db.collection("messages").doc(msgName).set({
    //   ...formData,
    //   date: date,
    //   time: time,
    //   timezone: d.getTimezoneOffset(),
    //   id: id
    // })
    // .then(() => {
    //   console.log("Great news! Message sent successfully!");
    //   /*console.log({
    //       name: formData.name,
    //       email: formData.email,
    //       message: formData.message,
    //       date: date,
    //       time: time,
    //       timezone: d.getTimezoneOffset(),
    //       id: id
    //   })*/
    // })
    // .catch((error) => {
    //   console.error("Krikey! Error sending message: ", error);
    // });

    // For component to show message was sent
    if (!dataSent){
      setDataSent(true)
    } 
  }

  function makeid(length) {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = 10;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  return (
    <DataContext.Provider value={{
      pageLocation, setPageLocation,
      projectsToDisplay, setProjectsToDisplay,
      isOpen, setIsOpen,
      formData, setFormData,
      dataSent, setDataSent,
      toggleForm,
      handleProjectFormSubmit,
      sparkleCount, setSparkleCount,
      sparkleSize, setSparkleSize
    }}>
      {props.children}
    </DataContext.Provider>
  )
}

export {DataContext, DataContextProvider};