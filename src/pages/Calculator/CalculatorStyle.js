import styled from "styled-components";
import {MEDIA} from "../../css/media.js";

export const CalculatorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

/** 최상단 타입선택 컨테이너
 * */
export const TypeSelectContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
  gap: 4px; /* space between grid items */


  button {
    display: flex;
    width: 30px;
    padding: 2px 4px 8px 4px;
    flex-direction: column;
    align-items: center;

    border-radius: 100px;
    outline: none;
    border: 2px solid #e2e8f090;
    background-color: #e2e8f090;
    gap: 4px;

    &:hover {
      border: 2px solid #60a5fa;
      color: #f8fafc;
      background-color: rgb(59, 130, 246);
    }

    &.checked {
      border: 2px solid #60a5fa;
      color: #f8fafc;
      font-weight: bold;
      background-color: rgb(59, 130, 246);
    }

    img {
      width: 18px;
      height: 18px;
    }

    // 텍스트
    div {
      writing-mode: vertical-rl;
      /*text-orientation: upright;*/
    }
  }
`

/** 중단 선택 저장 및 모드 변경 컨테이너
 * */
export const MidContainer = styled.div`
  /*중단 선택확인 및 모드버튼부분*/
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  margin: 8px 0 0 0;
  padding: 10px 0;
  border-top: 1px solid #00000020;

  button {
    background-color: #00000010; /* 예시로 배경색을 초록색으로 지정 */
    border: 1px solid #00000050; /* 테두리 */
    padding: 2px 8px;
    border-radius: 4px;
    color: #00000090;

    &.active {
      display: inline-block;
      background-color: #4CAF50; /* 예시로 배경색을 초록색으로 지정 */
      color: white; /* 텍스트 색상 */
      border: 1px solid #4CAF50; /* 테두리 */
      border-radius: 4px;
    }

    &:hover {
      display: inline-block;
      background-color: #4CAF50; /* 예시로 배경색을 초록색으로 지정 */
      color: white; /* 텍스트 색상 */
      border: 1px solid #4CAF50; /* 테두리 */
      border-radius: 4px;
    }
  }

  #selectedType {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0;

    button {
      color: #000000;
      display: flex;
      flex-wrap: nowrap;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      border: none;
      background: none;
      gap: 4px;

      font-size: 16px;
    }

    img {
      width: 18px;
      height: 18px;
    }
  }

  .trashButton {
    color: #00000050;
    cursor: pointer;
    height: 24px;

    &:hover {
      color: #4CAF50;
    }
  }
`

/** 결과 컨테이너
 * */
export const ResultContainer = styled.div`
  width: 100%;
  border: 1px solid #00000020;
  border-radius: 4px;


  ul {
    display: grid;
    grid-template-columns: repeat(6, 1fr);

    li {
      display: flex;
      flex-direction: column;
      align-items: center;

      &:not(:last-child) {
        border-right: 1px solid #00000020;
      }
    }

    h3 {
      font-weight: bold;
      border-bottom: 2px solid #00000090;
      margin-bottom: 4px;
    }

    &#resultKey {
      padding-right: 4px;
      @media (min-height: 600px) {
        padding-right: 0;
      }

      li {
        padding-top: 8px;
      }
    }

    &#resultValue {
      height: 180px;
      overflow-y: scroll;

      @media (min-height: 500px) {
        height: 300px;
        overflow-y: scroll;
      }

      @media (min-height: 600px) {
        height: auto;
        overflow-y: auto;
      }

      li {
        padding-bottom: 8px;
      }
    }

    // 컬러
    .key-0, .key-1 {
      background-color: #fef2f260;

      h3 {
        color: #ef4444;
        border-bottom: 2px solid #ef4444
      }

      button {
        //color: #dc2626;
      }
    }

    .key-3, .key-4, .key-5 {
      background-color: #f0f9ff60;

      h3 {
        color: #0369a1;
        border-bottom: 2px solid #0369a1;
      }
    }
  }

  button {
    display: flex;
    flex-wrap: nowrap;
    cursor: auto;

    margin: 2px 0 2px 0;
    padding: 0 6px 0 0;
    flex-direction: row;
    align-items: center;

    border-radius: 100px;
    outline: none;
    border: 2px solid #e2e8f000;
    background-color: #e2e8f090;
    gap: 4px;

    font-size: 14px;

    img {
      width: 16px;
      height: 16px;
    }
  }

  @media (${MEDIA.mobile}) {
    button {
      position: relative;
      margin: 0 0 0 0;
      padding: 0 0 0 0;

      div {
        display: none;
      }

      &:hover div {
        display: block;
        background: #FFFFFF79;
        border: 2px solid #00000010;
        border-radius: 16px;
        font-size: 20px;
        backdrop-filter: blur(10px);
        padding: 16px 24px;
        z-index: 1;
        position: fixed;
        top: 10%;
        left: 50%;
        transform: translate(-50%, -50%);
      }


      img {
        width: 24px;
        height: 24px;
      }
    }
  }
`