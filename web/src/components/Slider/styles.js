import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;

  margin-top: 50px;
  /* border: 2px solid white; */

  > h2 {
    text-align: left;
    margin: 0 0 23px 0;
  }

  .swiper-wrapper{
    width: fit-content;
    gap: 20px;

    /* border: 5px solid red; */
  }

  .swiper-slide{
    display: flex;
    justify-content: center;
    align-items: center;

    margin-right: 0 !important;

    width: 304px !important;
  }
`