import styled from 'styled-components';

const ImageGrid = styled.div`
  .masonry-grid {
    display: flex;
    margin-left: -30px; /* gutter size offset */
    width: auto;
  }

  .masonry-grid-column {
    padding-left: 30px; /* gutter size */
    background-clip: padding-box;
  }
  
  /* Style your items */
  .masonry-grid-column > div { /* change div to reference your elements you put in <Masonry> */
    margin-bottom: 30px;
  }

  a {
    position: relative;
    height: 100%;
    display: block;
    overflow: hidden;
    transform: scale(1);

    .title-container {
      height: 50px;
      top: 50%;
      position: absolute;
      right: 0;
      transform: translateY(-50%);
      width: 100%;
      overflow: hidden;
      z-index: 2;    

      .image-title {
        position: absolute;
        left: 50%;
        top: 70%;
        transform: translateX(-50%);
        transition: .25s cubic-bezier(.215, .61, .355, 1);
      }
    }

    img {
      transform: scale(1);
      transition: .575s cubic-bezier(.215, .61, .355, 1);
    }

    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background: ${({theme}) => theme?.colors?.white};
      opacity: 0;
      z-index: 0;
    }

    &:hover {
      transform: scale(.985);
      will-change: transform;
      transition: transform .5s;

      .image-title {
        top: 0;
      }

      img {
        transform: scale(1.03);
      }

      &:after {
        opacity: 0.8;
        transition: .475s cubic-bezier(.215, .61, .355, 1);
      }
    }
  }
`;

// const Thumbnail = styled.div`

// `;

export {ImageGrid};
