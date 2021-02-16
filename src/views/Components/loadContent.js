import ImageLoader from '../../img/loader.gif'

function LoadContent() {
  return (
      <div className="content-load">
          <img src={ImageLoader} alt='load'/>
      </div>
  );
}

export default LoadContent;