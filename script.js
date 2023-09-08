const Services = document.getElementById('Services');
const Body = document.querySelector("body");
const header = document.querySelector('.header');
const main = document.querySelector('.main');

Services.addEventListener('click', function() {
    header.setAttribute('style', 'position: inherit;');
    main.setAttribute('style','margin: 0 auto 0 auto;');
    Body.setAttribute("style","overflow: hidden;");

    const Modal_Container = document.createElement('div');
    Modal_Container.className = "Modal_Container";
    document.body.appendChild(Modal_Container);

    const Black_Modal_Window = document.createElement('div');
    Black_Modal_Window.className = "Black_Modal_Window";
    Modal_Container.appendChild(Black_Modal_Window);
    
    const block = document.createElement('div');
    block.className = "block";
    Modal_Container.appendChild(block);

    const a = document.createElement('a');
    a.className = 'a'
    block.appendChild(a);

    const img = document.createElement('img');
    img.className = 'img';
    img.src = "Img/Cross.png";
    a.appendChild(img);

    const h1 = document.createElement('h1');
    h1.className = "h1";
    h1.innerText = "РАЗРАБОТКА ДИЗАЙН-ПРОЕКТА"
    block.appendChild(h1);

    const ul = document.createElement('ul');
    ul.className = "ul"
    block.appendChild(ul);

    const li = document.createElement('li');
    li.className = "li"
    li.innerText = "Разработка обмерного плана;"
    ul.appendChild(li);

    const li_1 = document.createElement('li');
    li_1.className = "li"
    li_1.innerText = "Разработка плана монтажа и демонтажа конструкций;"
    ul.appendChild(li_1);

    const li_2 = document.createElement('li');
    li_2.className = "li"
    li_2.innerText = "Разработка планировочных решений (Плана расстановки мебели);"
    ul.appendChild(li_2);

    const li_3 = document.createElement('li');
    li_3.className = "li"
    li_3.innerText = "Разработка плана размещения сантехнического оборудования;"
    ul.appendChild(li_3);

    const li_4 = document.createElement('li');
    li_4.className = "li"
    li_4.innerText = "Разработка плана полов;"
    ul.appendChild(li_4);

    const li_5 = document.createElement('li');
    li_5.className = "li"
    li_5.innerText = "Разработка плана монтажа потолочных конструкций;"
    ul.appendChild(li_5);

    const li_6 = document.createElement('li');
    li_6.className = "li"
    li_6.innerText = "Разработка плана расположения светильников и сценария включения света;"
    ul.appendChild(li_6);

    const li_7 = document.createElement('li');
    li_7.className = "li"
    li_7.innerText = "Разработка плана размещения электрических розеток и электропроводов;"
    ul.appendChild(li_7);

    const li_8 = document.createElement('li');
    li_8.className = "li"
    li_8.innerText = "Создание разверток стен;"
    ul.appendChild(li_8);

    const li_9 = document.createElement('li');
    li_9.className = "li"
    li_9.innerText = "Создание ведомостей отделочных материалов, спецификаций осветительных приборов;"
    ul.appendChild(li_9);

    const li_10 = document.createElement('li');
    li_10.className = "li"
    li_10.innerText = "Создание концепции будущего интерьера (Эскизов и интерьерных коллажей);"
    ul.appendChild(li_10);

    const li_11 = document.createElement('li');
    li_11.className = "li"
    li_11.innerText = "Создание 3D-визуализации интерьера;"
    ul.appendChild(li_11);

    const li_12 = document.createElement('li');
    li_12.className = "li"
    li_12.innerText = "Разработка чертежей мебели."
    ul.appendChild(li_12);

    Black_Modal_Window.addEventListener('click', function () {
        Modal_Container.remove();
        Body.setAttribute("style","overflow: auto;");
    });
    a.addEventListener('click', function () {
        Modal_Container.remove();
        Body.setAttribute("style","overflow: auto;");
    });
});

let consultation = document.querySelectorAll('.consultation_a');
for(const consultations of consultation){
    consultations.addEventListener('click', function() {
        header.setAttribute('style', 'position: inherit;');
        main.setAttribute('style','margin: 0 auto 0 auto;');
        Body.setAttribute("style","overflow: hidden;");
        
        const Modal_Container = document.createElement('div');
        Modal_Container.className = "Modal_Container";
        document.body.appendChild(Modal_Container);
        
        const Black_Modal_Window = document.createElement('div');
        Black_Modal_Window.className = "Black_Modal_Window";
        Modal_Container.appendChild(Black_Modal_Window);
            
        const block = document.createElement('div');
        block.className = "block_2";
        Modal_Container.appendChild(block);
        
        const a = document.createElement('a');
        a.className = 'a'
        block.appendChild(a);
        
        const img = document.createElement('img');
        img.className = 'img';
        img.src = "Img/Cross.png";
        a.appendChild(img);

        const h = document.createElement('h1');
        h.className = 'h';
        h.innerHTML = 'ПОЛУЧИТЕ БЕСПЛАТНУЮ КОНСУЛЬТАЦИЮ ПЕРЕД НАЧАЛОМ ПРОЕКТА';
        block.appendChild(h);

        const p = document.createElement('p');
        p.className = 'p';
        p.innerHTML = 'Ответим на все интересующие вас вопросы простым языком, поможем подобрать оптимальное решение ваших задач и расскажем подробнее о работе нашей студии.';
        block.appendChild(p);

        const form = document.createElement('form');
        form.className = 'form';
        block.appendChild(form);

        const input_fName = document.createElement('input');
        input_fName.className = 'input_Name';
        input_fName.type = 'text';
        input_fName.placeholder = 'Как вас зовут ?';
        input_fName.name = 'name'
        input_fName.required = 'required';
        form.appendChild(input_fName);
        
        const input_tel = document.createElement('input');
        input_tel.className = 'input_tel';
        input_tel.type = 'phone';
        input_tel.placeholder = '+7 (___) ___ __ __';
        input_tel.name = 'phone';
        input_tel.required = 'required';
        form.appendChild(input_tel);

        const input_gmail = document.createElement('input');
        input_gmail.className = 'input_gmail';
        input_gmail.type = 'email';
        input_gmail.placeholder = 'Ваш email';
        input_gmail.required = 'required';
        form.appendChild(input_gmail);

        const flex_div = document.createElement('div');
        flex_div.className = 'flex_div';
        form.appendChild(flex_div);

        const input_checkbox = document.createElement('input');
        input_checkbox.className = 'input_checkbox';
        input_checkbox.type = 'checkbox'
        flex_div.appendChild(input_checkbox);

        const checkbox_p = document.createElement('p');
        checkbox_p.className = 'checkbox_p';
        checkbox_p.innerText = 'Я соглашаюсь с';
        input_gmail.required = 'required';
        flex_div.appendChild(checkbox_p);

        const checkbox_a = document.createElement('a');
        checkbox_a.className = 'checkbox_a';
        checkbox_a.href = 'Privacy_Policy.html';
        checkbox_a.target = '_blank';
        checkbox_a.innerText = 'политикой конфиденциальности';
        flex_div.appendChild(checkbox_a);

        const input_button = document.createElement('button');
        input_button.className = 'input_button';
        input_button.name = 'sumbit';
        input_button.innerHTML = 'Отправить';
        input_button.type = 'submit';
        form.appendChild(input_button);


        const inputs = document.querySelectorAll("input[required]");
        for (const input of inputs) {
            input.addEventListener('input', function() {
                form.remove();
                const p = document.createElement('p');
                p.className = 'p_thank';
                p.innerHTML = 'Благодарим вас, что выбрали нас !';
                block.appendChild(p);
            });
        };

        Black_Modal_Window.addEventListener('click', function () {
            Modal_Container.remove();
            Body.setAttribute("style","overflow: auto;");
        });
        a.addEventListener('click', function () {
            Modal_Container.remove();
            Body.setAttribute("style","overflow: auto;");
        });
        checkbox_a.addEventListener('click', function() {


        });
    })
};

let Modal_img = document.querySelectorAll('.Modal_img');
for(const Modal_imgs of Modal_img){
    Modal_imgs.addEventListener('click', function() {
        header.setAttribute('style', 'position: inherit;');
        main.setAttribute('style','margin: 0 auto 0 auto;');
        Body.setAttribute("style","overflow: hidden;");
        
        const Modal_Container = document.createElement('div');
        Modal_Container.className = "Modal_Container_2";
        document.body.appendChild(Modal_Container);
        
        const Black_Modal_Window = document.createElement('div');
        Black_Modal_Window.className = "Black_Modal_Window";
        Modal_Container.appendChild(Black_Modal_Window);

        const a = document.createElement('a');
        a.className = 'a'
        Modal_Container.appendChild(a);
        
        const img = document.createElement('img');
        img.className = 'img';
        img.src = "Img/Cross.png";
        a.appendChild(img);

        const block = document.createElement('div');
        block.className = "block";
        Modal_Container.appendChild(block);

        const Left_arrow = document.createElement('img');
        Left_arrow.className = 'Left_arrow';
        Left_arrow.src = 'Img/Left_arrow.png';
        block.appendChild(Left_arrow);

        const slider = document.createElement('div');
        slider.className = 'slider';
        block.appendChild(slider);

        const slider_line = document.createElement('div');
        slider_line.className = 'slider_line';
        slider.appendChild(slider_line);

        const Modal_Container_2_img1 = document.createElement('img');
        Modal_Container_2_img1.className = 'Modal_Container_2_img';
        Modal_Container_2_img1.src = "Img/block_img.jpeg";
        slider_line.appendChild(Modal_Container_2_img1);

        const Modal_Container_2_img1_2 = document.createElement('img');
        Modal_Container_2_img1_2.className = 'Modal_Container_2_img';
        Modal_Container_2_img1_2.src = "Img/block_img2.jpg";
        slider_line.appendChild(Modal_Container_2_img1_2);

        const Modal_Container_2_img1_3 = document.createElement('img');
        Modal_Container_2_img1_3.className = 'Modal_Container_2_img';
        Modal_Container_2_img1_3.src = "Img/block_img3.jpg";
        slider_line.appendChild(Modal_Container_2_img1_3);

        const Modal_Container_2_img1_4 = document.createElement('img');
        Modal_Container_2_img1_4.className = 'Modal_Container_2_img';
        Modal_Container_2_img1_4.src = "Img/block_img4.jpg";
        slider_line.appendChild(Modal_Container_2_img1_4);

        const Modal_Container_2_img1_5 = document.createElement('img');
        Modal_Container_2_img1_5.className = 'Modal_Container_2_img';
        Modal_Container_2_img1_5.src = "Img/block_img5.jpg";
        slider_line.appendChild(Modal_Container_2_img1_5);

        const Right_arrow = document.createElement('img');
        Right_arrow.className = 'Right_arrow';
        Right_arrow.src = 'Img/Right_arrow.png';
        block.appendChild(Right_arrow);

        let offset = 0;
        Right_arrow.addEventListener('click', function () {
            offset += 1210;
            if (offset >4840) {
                offset = 0;
            }
            slider_line.style.left = -offset + 'px';
        });

        Left_arrow.addEventListener('click', function () {
            offset -= 1210;
            if (offset < 0) {
                offset = 4840;
            }
            slider_line.style.left = -offset + 'px';
        });

        Black_Modal_Window.addEventListener('click', function () {
            Modal_Container.remove();
            Body.setAttribute("style","overflow: auto;");
        });
        a.addEventListener('click', function () {
            Modal_Container.remove();
            Body.setAttribute("style","overflow: auto;");
        });
    });
};













let Modal_img_2 = document.querySelectorAll('.Modal_img_2');
for(const Modal_imgs_2 of Modal_img_2){
    Modal_imgs_2.addEventListener('click', function() {
        header.setAttribute('style', 'position: inherit;');
        main.setAttribute('style','margin: 0 auto 0 auto;');
        Body.setAttribute("style","overflow: hidden;");
        
        const Modal_Container = document.createElement('div');
        Modal_Container.className = "Modal_Container_2";
        document.body.appendChild(Modal_Container);
        
        const Black_Modal_Window = document.createElement('div');
        Black_Modal_Window.className = "Black_Modal_Window";
        Modal_Container.appendChild(Black_Modal_Window);

        const a = document.createElement('a');
        a.className = 'a'
        Modal_Container.appendChild(a);
        
        const img = document.createElement('img');
        img.className = 'img';
        img.src = "Img/Cross.png";
        a.appendChild(img);

        const block = document.createElement('div');
        block.className = "block";
        Modal_Container.appendChild(block);

        const Left_arrow = document.createElement('img');
        Left_arrow.className = 'Left_arrow';
        Left_arrow.src = 'Img/Left_arrow.png';
        block.appendChild(Left_arrow);

        const slider = document.createElement('div');
        slider.className = 'slider';
        block.appendChild(slider);

        const slider_line = document.createElement('div');
        slider_line.className = 'slider_line';
        slider.appendChild(slider_line);

        const Modal_Container_2_img1 = document.createElement('img');
        Modal_Container_2_img1.className = 'Modal_Container_2_img';
        Modal_Container_2_img1.src = "Img/block_1_img.jpeg";
        slider_line.appendChild(Modal_Container_2_img1);

        const Modal_Container_2_img1_2 = document.createElement('img');
        Modal_Container_2_img1_2.className = 'Modal_Container_2_img';
        Modal_Container_2_img1_2.src = "Img/block_1_img2.jpg";
        slider_line.appendChild(Modal_Container_2_img1_2);

        const Modal_Container_2_img1_3 = document.createElement('img');
        Modal_Container_2_img1_3.className = 'Modal_Container_2_img';
        Modal_Container_2_img1_3.src = "Img/block_1_img3.jpg";
        slider_line.appendChild(Modal_Container_2_img1_3);

        const Modal_Container_2_img1_4 = document.createElement('img');
        Modal_Container_2_img1_4.className = 'Modal_Container_2_img';
        Modal_Container_2_img1_4.src = "Img/block_1_img4.jpg";
        slider_line.appendChild(Modal_Container_2_img1_4);

        const Right_arrow = document.createElement('img');
        Right_arrow.className = 'Right_arrow';
        Right_arrow.src = 'Img/Right_arrow.png';
        block.appendChild(Right_arrow);

        let offset = 0;
        Right_arrow.addEventListener('click', function () {
            offset += 1210;
            if (offset >3630) {
                offset = 0;
            }
            slider_line.style.left = -offset + 'px';
        });

        Left_arrow.addEventListener('click', function () {
            offset -= 1210;
            if (offset < 0) {
                offset = 3630;
            }
            slider_line.style.left = -offset + 'px';
        });

        Black_Modal_Window.addEventListener('click', function () {
            Modal_Container.remove();
            Body.setAttribute("style","overflow: auto;");
        });
        a.addEventListener('click', function () {
            Modal_Container.remove();
            Body.setAttribute("style","overflow: auto;");
        });
    });
};














let Modal_img_3 = document.querySelectorAll('.Modal_img_3');
for(const Modal_imgs_3 of Modal_img_3){
    Modal_imgs_3.addEventListener('click', function() {
        header.setAttribute('style', 'position: inherit;');
        main.setAttribute('style','margin: 0 auto 0 auto;');
        Body.setAttribute("style","overflow: hidden;");
        
        const Modal_Container = document.createElement('div');
        Modal_Container.className = "Modal_Container_2";
        document.body.appendChild(Modal_Container);
        
        const Black_Modal_Window = document.createElement('div');
        Black_Modal_Window.className = "Black_Modal_Window";
        Modal_Container.appendChild(Black_Modal_Window);

        const a = document.createElement('a');
        a.className = 'a'
        Modal_Container.appendChild(a);
        
        const img = document.createElement('img');
        img.className = 'img';
        img.src = "Img/Cross.png";
        a.appendChild(img);

        const block = document.createElement('div');
        block.className = "block";
        Modal_Container.appendChild(block);

        const Left_arrow = document.createElement('img');
        Left_arrow.className = 'Left_arrow';
        Left_arrow.src = 'Img/Left_arrow.png';
        block.appendChild(Left_arrow);

        const slider = document.createElement('div');
        slider.className = 'slider';
        block.appendChild(slider);

        const slider_line = document.createElement('div');
        slider_line.className = 'slider_line';
        slider.appendChild(slider_line);

        const Modal_Container_2_img1 = document.createElement('img');
        Modal_Container_2_img1.className = 'Modal_Container_2_img';
        Modal_Container_2_img1.src = "Img/block_2_img.jpg";
        slider_line.appendChild(Modal_Container_2_img1);

        const Modal_Container_2_img1_2 = document.createElement('img');
        Modal_Container_2_img1_2.className = 'Modal_Container_2_img';
        Modal_Container_2_img1_2.src = "Img/block_2_img2.jpg";
        slider_line.appendChild(Modal_Container_2_img1_2);

        const Modal_Container_2_img1_3 = document.createElement('img');
        Modal_Container_2_img1_3.className = 'Modal_Container_2_img';
        Modal_Container_2_img1_3.src = "Img/block_2_img3.jpg";
        slider_line.appendChild(Modal_Container_2_img1_3);

        const Right_arrow = document.createElement('img');
        Right_arrow.className = 'Right_arrow';
        Right_arrow.src = 'Img/Right_arrow.png';
        block.appendChild(Right_arrow);

        let offset = 0;
        Right_arrow.addEventListener('click', function () {
            offset += 1210;
            if (offset >2420) {
                offset = 0;
            }
            slider_line.style.left = -offset + 'px';
        });

        Left_arrow.addEventListener('click', function () {
            offset -= 1210;
            if (offset < 0) {
                offset = 2420;
            }
            slider_line.style.left = -offset + 'px';
        });

        Black_Modal_Window.addEventListener('click', function () {
            Modal_Container.remove();
            Body.setAttribute("style","overflow: auto;");
        });
        a.addEventListener('click', function () {
            Modal_Container.remove();
            Body.setAttribute("style","overflow: auto;");
        });
    });
};


