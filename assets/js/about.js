// ================== cards carousel =================
$(document).ready(function () {
    const personalBackgroundFile = $('.file-component[data-title="personal-background.txt"]');
    if (personalBackgroundFile.length) {
        setTimeout(() => {
            personalBackgroundFile.trigger('click');
        }, 100);
    }
    const cards = $('.cards');
    const cardsData = [
        { text: "Always clarify project requirements to choose the right tech stack based on speed, budget, and scope." },
        { text: "Design your codebase for scalability from the beginning to save time during future updates." },
        { text: "Select the appropriate database type; use NoSQL for heavy read operations and SQL for structured data." },
        { text: "Break complex projects into Minimum Viable Products (MVPs) for faster testing and iteration." },
        { text: "Utilize Git for version control: commit regularly, branch wisely, and write clear commit messages." },
        { text: "Prioritize user experience and interface design, as they significantly impact the value of your application." },
        { text: "Automate repetitive tasks like testing and deployment to save time and reduce errors." },
        { text: "Assess security needs based on user data sensitivity, adapting strategies accordingly." },
        { text: "Optimize for performance; focus on fast-loading applications by optimizing images and minimizing scripts." },
        { text: "Stay curious and keep learning to adapt to changing trends and emerging tools in development." },
    ];

    function typeWriter(text, element, callback) {
        let index = 0;
        const interval = setInterval(() => {
            if (index < text.length) {
                element.text(text.slice(0, index + 1));
                index++;
            } else {
                clearInterval(interval);
                setTimeout(callback, 3000);
            }
        }, 50);
    }

    function startTypingAnimation(currentIndex = 0) {
        typeWriter(cardsData[currentIndex].text, cards, () => {
            currentIndex = (currentIndex + 1) % cardsData.length;
            startTypingAnimation(currentIndex);
        });
    }
    startTypingAnimation();

    // ================== show clicked file ================== 
    const container = $('.code-container');
    const lineNumbers = $('.code-container .line-numbers');
    const codeText = $('.code-container .code-text');
    let topbar = $('main .center .topbar');
    function setfile(file, closing = false) {
        var topbarData = '';
        lineNumbers.html('');
        codeText.html('');
        let title = file.data('title');
        if (!closing) {
            topbarData += `<div class="file-name px-2"><span>${title}</span><i class="fa-solid fa-xmark close-file ms-3" type="button"></i></div>`;
            topbar.append(topbarData);
        }
        let data = file.data('data').replace(/<br\s*\/?>/ig, '\n');

        let lines = data.split('\n');
        $.each(lines, (index, line) => {
            lineNumbers.append(`${index + 1}\n`);
            codeText.append(`${line}\n`);
        });
    }
    $('.file-component').on('click', function () {
        var windowWidth = $(window).width();
        setfile($(this));
        if (windowWidth < 768) {
            $('.asideTrigger').click();
        }
    })
    $(document).on('click', '.close-file', function () {
        $(this).closest('.file-name').remove();
        let topbar = $('main .center .topbar');
        let file = topbar.find('div').first();
        title = file.find('span').text();
        if (title.length > 0) {
            let result = $('ul.items li[data-title="' + title + '"]')
            setfile(result, true);
        } else {
            lineNumbers.html('');
            codeText.html('');
        }
    })

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
})