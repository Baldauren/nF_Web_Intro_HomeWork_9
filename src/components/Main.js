function main(props) {
  return (
    <a className="main__link" href="/index2.html">
      <div className="post__item ">
        <div className="wrapper ">
          <div className="post__text">
            <span className="authors__name">
              <img
                style={{ borderRadius: "100%" }}
                src="https://picsum.photos/20"
                alt="Author's Profile"
              />
              <span className="authors__name-span">Имя автора</span> и
              <span className="authors__name-span"> Название темы</span> · 7
              июля
            </span>
            <p className="post__title ">{props.postHeader}</p>
            <p className="post__descr ">{props.postContent}</p>
            <div className="post__info ">
              <div className="post__info-text">
                <button className="post__info-lang">JavaScript</button>
                <span>12 мин чтения</span> ·<span>Выбрано для вас</span>
              </div>
              <div className="post__info-btns">
                <div className="post__info-btn"></div>
                <div className="post__info-btn"></div>
                <div className="post__info-btn"></div>
              </div>
            </div>
          </div>
          <div className="post__img">
            <img src="https://picsum.photos/200" alt="Случайное изображение" />
          </div>
        </div>
      </div>
    </a>
  );
}

export default main;
