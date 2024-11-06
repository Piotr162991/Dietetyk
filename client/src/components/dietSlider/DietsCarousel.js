import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './DietCarousel.css'

function DietsCarousel({ diets}) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Ustawienie liczby widocznych slajdów
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <Slider {...settings}>
            {diets?.map((diet, index) => (
                <div key={index} className="user-card">
                    {/* Treść karty użytkownika */}
                    <h4>Nazwa: {diet.name}</h4>
                    <h4>Płeć: {diet.description}</h4>
                    <h4>Cel: {diet.target_calories}</h4>
                    <h4>Poziom aktywności: {diet.protein_percentage}</h4>
                    <h4>Wzrost: {diet.carb_percentage}</h4>
                    <h4>Waga: {diet.fat_percentage}</h4>
                    {/* i inne elementy */}
                </div>
            ))}
        </Slider>
    );
}
export default DietsCarousel