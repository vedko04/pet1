function moveSlider(direction) {
    const slider = document.querySelector('.buy-list');
    const sliderItems = document.querySelectorAll('.buy-box');

    if (direction > 0) {
        // Перемещаем первый элемент списка в конец списка
        slider.appendChild(sliderItems[0]);
    } else {
        // Перемещаем последний элемент списка в начало списка
        slider.insertBefore(sliderItems[sliderItems.length - 1], sliderItems[0]);
    }

    // Плавное перемещение без скачков, даже если пользователь заметит переходы
    // Опционально можно добавить анимацию для плавности перемещения
}

document.querySelector('.prev').addEventListener('click', () => moveSlider(-1));
document.querySelector('.next').addEventListener('click', () => moveSlider(1));
