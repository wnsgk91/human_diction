//TODO ""통일하기

// 검색버튼 눌렀을 때 호출되는 함수
function search_history(){
  var history_list = JSON.parse(localStorage.getItem("search_history"));
  var value = document.getElementById('search').value;//이름 확실하게
  if(value !== '') {
      history_list[history_list.length] = value;
      localStorage.setItem("search_history", JSON.stringify(history_list));
      console.log("히스토리 생성");
      history_process(history_list);
  }else{
    console.log("검색어 없음");
  }
}

// nav-bar 홈 버튼 눌렀을 때 호출되는 함수
function show_history() {
    var history_list = JSON.parse(localStorage.getItem("search_history"));
    history_process(history_list);
}

// 중복되는 for 문
function history_process(history_list){
  var five_items = history_list.slice(-5);
  console.log(five_items);
  var history_banner = '';
  for (var i = 0; i< five_items.length; i++) {
      if(five_items[i] !== ''){
          history_banner += '<div class="card mb-4 box-shadow"><div class="card-body"><h5 class="card-title">' + five_items[i] + '</h5></div></div>';
      }
  }
  var show = document.getElementById('history_place');
  console.log(show);
  show.innerHTML = history_banner;

}

//이벤트 처리
$(function () {
    $("#go_to_home_nav").on("click", show_history());
});
  /*window.onload = function () {
      show_history();
  }*/

  // 검색버튼 눌렀을 때 호출되는 함수
  function search_history(){
   // var history_list = [];
    var value = document.getElementById('search').value;
    //var show = document.getElementById('five_list');
    if(value !== '') {
        history_list[history_list.length] = value;
        localStorage.setItem('search_history', JSON.stringify(history_list));
        console.log("히스토리 생성");
        show_history();
    }
  }
