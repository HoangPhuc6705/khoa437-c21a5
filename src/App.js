import React, { Suspense, useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand } from '@fortawesome/free-solid-svg-icons';
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
  const [isDone, setIsDone] = useState(true);
  const [isMobile, setIsMobile] = useState();
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [landscape, setLandscape] = useState();

  function handleShowOptions() {
    setShow(!show);
  }

  function handleShowImage() {
    setShowImage(!showImage);
  }

  function getImage(image) {
    setImage(image);
  }

  function handleIsMobile() {
    const userAgent = navigator.userAgent || window.opera;

    if (/android/i.test(userAgent)) {
      return true;
    }

    if (/iPhone|iPad|iPod/i.test(userAgent)) {
      return true;
    }

    if (/windows phone/i.test(userAgent)) {
      return true;
    }

    return false;
  }

  function openFullscreen(element) {
    if (element.requestFullscreen) {
      element.requestFullscreen();
      setIsFullScreen(true);
    } else if (element.mozRequestFullScreen) { // Firefox
      element.mozRequestFullScreen();
      setIsFullScreen(true);
    } else if (element.webkitRequestFullscreen) { // Chrome, Safari và Opera
      element.webkitRequestFullscreen();
      setIsFullScreen(true);
    } else if (element.msRequestFullscreen) { // IE/Edge
      element.msRequestFullscreen();
      setIsFullScreen(true);
    }
  }

  function closeFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { // Firefox
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { // Chrome, Safari và Opera
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { // IE/Edge
      document.msExitFullscreen();
    }
  }

  function isLandscape() {
    return window.matchMedia("(orientation: landscape)").matches;
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

    if (handleIsMobile()) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }

    return () => window.removeEventListener('load', handleIsDone);
  }, []);

  useEffect(() => {
    if (isLandscape()) {
      setLandscape(true);
    } else {
      setLandscape(false);
    }
    console.log(landscape)
  }, [landscape]);

  if (isDone) {
    return (
      <div className='loading_page'>Chờ xíu nhe mấy ní...</div>
    )
  }

  if (isMobile && (!isFullScreen || !landscape)) {
    return (
      <div className='setting'>
        <div
          className='icon'
          onClick={() => openFullscreen(document.documentElement)}>
          <div>
            <FontAwesomeIcon icon={faExpand} />
          </div>
          <span>Toàn màn hình</span>
        </div>
        <span>
          Hãy quay ngang điện thoại và bật chế độ toàn màn hình để có những trải nghiệm tốt nhất
        </span>
      </div>
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