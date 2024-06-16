import styled from "styled-components";

export const TableContainer = styled.table`

  table {
    border-collapse: collapse;
  }

  th, td {
    width: 100px;
    height: 24px;
    text-align: center;
    vertical-align: middle;

    .main {
      color: #000000FF;
      font-weight: 400;
    }

    .sub {
      color: #00000090;
      font-size: 14px;
      font-weight: 400;
    }
  }

  td, th {
    border: 1px solid #00000030;
  }

  //th {
  //  border: 1px solid #FFFFFF30;
  //}

  td, th {
    //margin: 2px 2px;
    padding: 6px 2px;
    border-radius: 4px;
  }

  .Attack {
    background-color: #fed7aa
  }

  .Defense {
    background-color: #fef08a
  }

  .Sp-Attack {
    background-color: #bfdbfe;
  }

  .Sp-Defense {
    background-color: #a7f3d0;
  }

  .Speed {
    background-color: #fecdd3;
  }
`