const ratingRange = document.getElementById('ratingRange');
const ratingValue = document.getElementById('ratingValue');

ratingRange.addEventListener('input', function () {
  const value = Number(this.value); 
  ratingValue.textContent = value + "⭐";

  if (value < 4) {
    ratingValue.style.color = "red";
  } else if (value < 8) {
    ratingValue.style.color = "orange";
  } else {
    ratingValue.style.color = "green";
  }
});
const form = document.querySelector('form');
  const reviewsInner = document.getElementById('carouselReviewsInner');
  const carousel = document.getElementById('carouselReviews');

  form.addEventListener('submit', function (event) {
    event.preventDefault(); // 🔴 отмена перезагрузки

    // Получаем значения из формы
    const name = document.getElementById('exampleInputEmail1').value;
    const surname = document.getElementById('exampleInputPassword1').value;
    const opinion = document.getElementById('exampleFormControlTextarea1').value;
    const rating = document.getElementById('ratingRange').value;

    // Создаем новый отзыв
    const newItem = document.createElement('div');

    newItem.classList.add('carousel-item', 'text-dark', 'bg-warning');

    newItem.innerHTML = `
      <h2>${name} ${surname}'s review (Your review)</h2>
      <p>Rate - ${rating} stars</p>
      <p>Opinion: ${opinion}</p>
    `;

    // Убираем 'active' у текущего последнего
    const activeItem = reviewsInner.querySelector('.carousel-item.active');
    if (activeItem) {
      activeItem.classList.remove('active');
    }

    // Добавляем новый и делаем его активным
    newItem.classList.add('active');
    reviewsInner.appendChild(newItem);

    // Сброс формы (если нужно)
    form.reset();
    document.getElementById('ratingValue').textContent = '';
  });


      const readYes = document.getElementById('readYes');
    const readNo = document.getElementById('readNo');
    const reviewSection = document.getElementById('reviewSection');

    readYes.addEventListener('change', () => {
        reviewSection.style.display = 'block';
    });

    readNo.addEventListener('change', () => {
        reviewSection.style.display = 'none';
    });