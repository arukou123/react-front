.editor-template {
    .panes {
      height: calc(100vh - 4rem); // 페이지 높이에서 EditorHeader 크기 빼기
      display: flex;
      position: relative; // separator의 위치 설정을 위하여 relative로 설정
      .pane {
        display: flex;
        min-width: 0; // 내부의 내용이 커도 반대편 영역을 침범하지 않게 해줍니다.
        overflow: auto; // 너무 많이 줄이면 스크롤바가 나타나게 해줍니다.
      }
      .separator {
        width: 1rem; // 클릭 영역을 넓게 설정하기 위함입니다.
        height: 100%;
        position: absolute;
        transform: translate(-50%); // 자신의 50%만큼 왼쪽으로 이동
        cursor: col-resize; // 리사이즈 커서
      }
      @include media("<medium") {
        .editor {
          flex: 1!important;
        }
        .preview, .separator {
          display: none;
        }
      }
    }
  }
  