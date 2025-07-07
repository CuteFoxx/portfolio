import Gallery from "./Gallery";
import LinkImage from "./LinkImage";

const Project = () => {
  return (
    <div>
      <Gallery intent="primary">
        <LinkImage
          href="https://music.youtube.com/watch?v=9AHLjHsM57I"
          imgSrc="https://images.unsplash.com/photo-1743508453815-8dd6348ee094?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="landscape"
        />
        <LinkImage
          href="https://music.youtube.com/watch?v=9AHLjHsM57I"
          imgSrc="https://images.unsplash.com/photo-1751220418652-1c10d9616227?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="landscape"
        />
        <LinkImage
          href="https://music.youtube.com/watch?v=9AHLjHsM57I"
          imgSrc="https://images.unsplash.com/photo-1750247612191-61b3627be867?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="landscape"
        />
      </Gallery>
    </div>
  );
};

export default Project;
