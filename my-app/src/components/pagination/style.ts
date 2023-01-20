import styled from "styled-components";

export const PaginateWrapper = styled.section`
  .pagination {
    color: #8a78e0;
    display: flex;
    margin: 40px auto 0;
    list-style: none;
    width: max-content;
  }
  li {
    margin: 0 10px;
    cursor: pointer;
  }
  .break-me {
    cursor: default;
  }
  .active {
    border-color: transparent;
    background-color: rgba(138, 120, 224, 0.76);
    color: white;
  }
  .selected a {
    color: rgba(128, 128, 128, 0.33);
    cursor: auto;
    &:hover {
      color: rgba(128, 128, 128, 0.33);
    }
  }
  .disabled {
    visibility: hidden;
  }
`;