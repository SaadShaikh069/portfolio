$(document).ready(() => {
    const quotes = [
        `<span class="text-danger">Skill:</span><span class="text-success">"Proficient in Laravel and PHP."</span>`,
        `<span class="text-danger">Skill:</span><span class="text-success">"Expertise in MySQL for database management."</span>`,
        `<span class="text-danger">Skill:</span><span class="text-success">"Strong knowledge of JavaScript and jQuery."</span>`,
        `<span class="text-danger">Skill:</span><span class="text-success">"Familiar with Bootstrap for responsive design."</span>`,
        `<span class="text-danger">Skill:</span><span class="text-success">"Experienced in AJAX for dynamic content loading."</span>`,
        `<span class="text-danger">Statement:</span><span class="text-success">"Code is like humor; it’s better when it’s clean."</span>`,
        `<span class="text-danger">Statement:</span><span class="text-success">"The best way to predict the future is to invent it."</span>`,
        `<span class="text-danger">Statement:</span><span class="text-success">"Programming is not about what you know, but what you can learn."</span>`,
        `<span class="text-danger">Statement:</span><span class="text-success">"Debugging is being the detective in a crime movie where you are also the murderer."</span>`,
        `<span class="text-danger">Statement:</span><span class="text-success">"Simplicity is the ultimate sophistication."</span>`,
        `<span class="text-danger">Statement:</span><span class="text-success">"The only way to learn a new programming language is by writing programs in it."</span>`,
        `<span class="text-danger">Statement:</span><span class="text-success">"Life is too short for bad code."</span>`,
        `<span class="text-danger">Statement:</span><span class="text-success">"Good programmers use their brains, but good guidelines save us from having to think out every case."</span>`,
        `<span class="text-danger">Statement:</span><span class="text-success">"Every great developer you know got there by solving problems they were unqualified to solve until they actually did it."</span>`,
        `<span class="text-danger">Statement:</span><span class="text-success">"Programming isn’t about what you know; it’s about what you can figure out."</span>`,
    ];

    let currentQuoteIndex = 0;

    function changequote() {
        const codeSection = $('main .intro .codeSection');
        codeSection.fadeOut(300, function () {
            codeSection.html(`<span class="text-primary">const</span><span class="text-info ms-3">Object</span> <span class="text-white">=</span><span class="text-warning">{</span>${quotes[currentQuoteIndex]}<span class="text-warning">}</span>`);
            currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
            codeSection.fadeIn(300);
        });
    }


    changequote();

    setInterval(changequote, 6000);



    // ====================== set active class on active url =================
    const currentPath = window.location.pathname.split('/').pop();
    $('.body-text a').removeClass('active').each(function () {
        if ($(this).attr('href') === currentPath || (currentPath === '/' && $(this).attr('href') === '')) {
            $(this).addClass('active');
        }
    });
    if ($('.right .contact a').attr('href') === currentPath) {
        $('.right .contact a').addClass('active');
    } else {
        $('.right .contact a').removeClass('active');
    }
    // ====================== Typing name animation =================


    const texts = [
        { selector: '.greet', text: "Hi all. I am " },
        { selector: '.name', text: "Saad-Shaikh" },
        { selector: '.position', text: 'full-stack developer' }
    ];
    let index = 0, charIndex = 0;

    function type() {
        if (index < texts.length) {
            const { selector, text } = texts[index];
            $(selector).append(text[charIndex++]);
            if (charIndex === text.length) { index++; charIndex = 0; }
            setTimeout(type, 150);
        }
    }

    type();
    // ============================= Dropdown js=====================
    function toggleDropdown($this) {
        const icon = $this.find('i.fa-caret-right');
        const isClosed = $this.data('status') === 'closed';
        $this.data('status', isClosed ? 'open' : 'closed');
        icon.css('transform', `rotate(${isClosed ? 90 : 0}deg)`);
        $this.next('.items').slideToggle('slow');
    }

    $('.my-dropdown, .my-dropdown-q').each(function () {
        const $this = $(this);
        $this.data('status', 'closed');
        $this.find('i.fa-caret-right').css('transform', 'rotate(0deg)');
        $this.next('.items').hide();
    });

    const firstDropdown = $('.my-dropdown, .my-dropdown-q').first();
    toggleDropdown(firstDropdown);

    $('.my-dropdown, .my-dropdown-q').on('click', function () {
        toggleDropdown($(this));
    });


    // ============================= mobile header =====================
    $("#trigger").on('click', function () {
        let menu = $('#mobile-menus');
        // let status = menu.data('status');
        menu.slideToggle();
    })



});
