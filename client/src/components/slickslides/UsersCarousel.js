import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './UsersCarousel.css'

function UsersCarousel({ users }) {
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
            {users?.map((user, index) => (
                <div key={index} className="user-card">
                    {/* Treść karty użytkownika */}
                    <h4>Nazwa: {user.username}</h4>
                    <h4>Płeć: {user.gender}</h4>
                    <h4>Cel: {user.goal}</h4>
                    <h4>Poziom aktywności: {user.activity_level}</h4>
                    <h4>Wzrost: {user.height_cm}</h4>
                    <h4>Waga: {user.weight_kg}</h4>
                    {/* i inne elementy */}
                </div>
            ))}
        </Slider>
    );
}
export default UsersCarousel