let size = 50; // საწყისი ზომა
        const body = document.body;

        for (let i = 0; i < 10; i++) {
            size *= 2; // ორმაგი ზომა

            // div შექმნა
            const div = document.createElement('div');
            div.classList.add('myDiv');
            div.style.width = size + 'px';
            div.style.height = size + 'px';

            if (i % 2 === 0) {
                // ჯერ თავში
                body.insertBefore(div, body.firstChild);
            } else {
                // შემდეგ ბოლოში
                body.appendChild(div);
            }
        }