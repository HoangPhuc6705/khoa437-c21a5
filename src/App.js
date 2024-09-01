import React, { Suspense, useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer'
import './App.css'
import "@fontsource/inter";
import "@fontsource/lora"
import "@fontsource/poppins"
import "@fontsource/inter"
import "@fontsource/quicksand"
import Page1 from './component/Introduce/main'
import Navigation from './component/navigation/navigate';
import Page2 from './component/Page2/page2';
import Options from './component/option/main';
import Contact from './component/navigation/contact';
// import Member from './component/members/member';
// import Stories from './component/stories/main';
import ShowImage from './component/showImage/main';
// import FinallyPage from './component/finally/main';
const Stories = React.lazy(() => import('./component/stories/main'));
const FinallyPage = React.lazy(() => import('./component/finally/main'));
const Member = React.lazy(() => import('./component/members/member'));


function App() {
  const [show, setShow] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [image, setImage] = useState();
  const [isDone, setIsDone] = useState(true)

  function handleShowOptions() {
    setShow(!show);
  }

  function handleShowImage() {
    setShowImage(!showImage);
  }

  function getImage(image) {
    setImage(image);
  }

  useEffect(() => {
    document.body.style.overflow = show ? 'hidden' : 'auto';
    document.body.style.overflow = showImage ? 'hidden' : 'auto';
  }, [show, showImage]);

  useEffect(() => {
    const handleIsDone = () => {
      setIsDone(false);
    }

    if (document.readyState === 'complete') {
      handleIsDone();
    } else {
      window.addEventListener('load', handleIsDone);
    }

    return () => window.removeEventListener('load', handleIsDone);
  }, []);

  if (isDone) {
    return (
      <div className='loading_page'>Chờ xíu nhe mấy ní...</div>
    )
  }

  return (
    <div className="App">
      <Navigation onShowOptions={handleShowOptions} />
      <Contact />
      <Page1 />
      <Page2 onShowImages={handleShowImage} getImage={getImage} />
      <Suspense fallback={<div>Loading...</div>}>
        <Member />
        <Stories onShowImages={handleShowImage} getImage={getImage} />
        <FinallyPage />
      </Suspense>
      {!show || <Options onShowOptions={handleShowOptions} />}
      {!showImage || <ShowImage imagePath={image} onShowImages={handleShowImage} />}
    </div>
  );
}

export default App;