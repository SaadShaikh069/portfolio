$(document).ready(function () {
    const skills = {
        "PHP": { "img": "php.png", "progress": "90%" },
        "Laravel": { "img": "laravel.png", "progress": "70%" },
        "Javascript": { "img": "javascript.png", "progress": "85%" },
        "React": { "img": "react.png", "progress": "70%" },
        "Jquery": { "img": "jquery.png", "progress": "80%" },
        "Bootstrap": { "img": "bootstrap.png", "progress": "90%" },
        "Tailwind": { "img": "tailwind.png", "progress": "40%" },
        "Scss": { "img": "scss.png", "progress": "60%" },
        "Nodejs": { "img": "nodejs.png", "progress": "80%" },
        "Express js": { "img": "expressjs.png", "progress": "75%" },
        "Nextjs": { "img": "nextjs.png", "progress": "70%" },
        "Mysql": { "img": "mysql.png", "progress": "80%" },
        "Github": { "img": "github.png", "progress": "70%" },
        "Shadcn": { "img": "shadcn.png", "progress": "70%" },
    };


    $.each(skills, function (skill, data) {
        const card = `
            <div class="cards">
                <div class="icon"><img src="assets/image/${data.img}" alt="${skill}"></div>
                <div class="title">${skill}</div>
                <div class="progres">
                    <span>Progress</span>
                    <span>${data.progress}</span>
                    <div class="bar-wrapper">
                        <div class="bar" data-progress="${data.progress}"></div>
                    </div>
                </div>
            </div>
        `;

        // Append the card to the center div
        const $card = $(card).appendTo('.center');

        const $bar = $card.find('.bar');
        let currentProgress = 0;
        const targetProgress = parseInt($bar.attr('data-progress'));
        const interval = setInterval(() => {
            $bar.css('width', ++currentProgress + '%');
            if (currentProgress >= targetProgress) clearInterval(interval);
        }, 10);
    });


    // ================ mobile responsive aside ================ 
    $('.asideTrigger').on('click', function () {
        var $aside = $('aside');
        if ($aside.hasClass('active')) {
            $aside.removeClass('active').animate({ left: '-300px' }, 300, function () {
                $aside.css('display', 'none');
            });
        } else {
            $aside.addClass('active').css('display', 'block').animate({ left: '0' }, 300);
        }
    })
});
