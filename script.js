
        // Cursor personalizado
        let cursor = document.querySelector('.custom-cursor');
        
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX - 10 + 'px';
            cursor.style.top = e.clientY - 10 + 'px';
            
            // Criar trilha do cursor
            if (Math.random() > 0.8) {
                let trail = document.createElement('div');
                trail.className = 'cursor-trail';
                trail.style.left = e.clientX - 3 + 'px';
                trail.style.top = e.clientY - 3 + 'px';
                document.body.appendChild(trail);
                
                setTimeout(() => trail.remove(), 1000);
            }
        });

        // Partículas vermelhas
        function createParticle() {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDuration = (Math.random() * 6 + 4) + 's';
            particle.style.animationDelay = Math.random() * 2 + 's';
            
            const redColors = [
                'rgba(255, 0, 64, 0.8)', 
                'rgba(204, 0, 51, 0.8)', 
                'rgba(255, 215, 0, 0.6)', 
                'rgba(255, 255, 255, 0.4)'
            ];
            particle.style.background = `radial-gradient(circle, ${redColors[Math.floor(Math.random() * redColors.length)]}, transparent)`;
            
            document.querySelector('.particles').appendChild(particle);
            setTimeout(() => particle.remove(), 10000);
        }

        // Criar partículas continuamente
        setInterval(createParticle, 300);

        // Função principal da surpresa
        function showSurprise() {
            const message = document.getElementById('specialMessage');
            message.classList.add('show');
            
            // Explosão de corações vermelhos
            createHeartExplosion();
            
            // NOVA FUNÇÃO: Animação épica "TE AMO"
            createTeAmoAnimation();
            
            // Vibração
            if (navigator.vibrate) {
                navigator.vibrate([200, 100, 200, 100, 300]);
            }
            
            // Mudança temporária da cor de fundo
            document.body.style.background = 'linear-gradient(135deg, #ff0040, #990026, #000000, #ff1744)';
            document.body.style.backgroundSize = '400% 400%';
            document.body.style.animation = 'gradient-shift 2s ease infinite';
            
            setTimeout(() => {
                document.body.style.background = 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #2a0a0a 100%)';
                document.body.style.animation = '';
            }, 4000);
            
            // Criar mais partículas especiais
            for (let i = 0; i < 50; i++) {
                setTimeout(() => createParticle(), i * 50);
            }
        }

        // NOVA FUNÇÃO: Animação épica "TE AMO"
        function createTeAmoAnimation() {
            // Criar múltiplas animações "TE AMO"
            const teAmoTexts = [
                'TE AMO ❤️',
                '💖 TE AMO MUITO 💖',
                'EU TE AMO!',
                '❤️ MEU AMOR ❤️',
                'TE AMO PARA SEMPRE!',
                '💕 VOCÊ É TUDO 💕',
                'MEU CORAÇÃO É SEU!',
                '🥰 TE AMO DEMAIS 🥰'
            ];
            
            // Animação central principal
            const mainTeAmo = document.createElement('div');
            mainTeAmo.innerHTML = 'EU TE AMO ❤️';
            mainTeAmo.style.cssText = `
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                font-size: 4rem;
                font-weight: bold;
                background: linear-gradient(45deg, #ff0040, #ffd700, #ff0040);
                background-size: 200% 200%;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                z-index: 9999;
                pointer-events: none;
                animation: te-amo-main 4s ease-out forwards;
                text-shadow: 0 0 30px rgba(255, 0, 64, 0.8);
                filter: drop-shadow(0 0 20px rgba(255, 0, 64, 1));
            `;
            document.body.appendChild(mainTeAmo);
            setTimeout(() => mainTeAmo.remove(), 4000);

            // Múltiplos "TE AMO" flutuantes
            for (let i = 0; i < 8; i++) {
                setTimeout(() => {
                    const teAmo = document.createElement('div');
                    const randomText = teAmoTexts[Math.floor(Math.random() * teAmoTexts.length)];
                    teAmo.innerHTML = randomText;
                    
                    const startX = Math.random() * window.innerWidth;
                    const startY = Math.random() * window.innerHeight;
                    
                    teAmo.style.cssText = `
                        position: fixed;
                        left: ${startX}px;
                        top: ${startY}px;
                        font-size: ${Math.random() * 2 + 1.5}rem;
                        font-weight: bold;
                        color: ${Math.random() > 0.5 ? '#ff0040' : '#ffd700'};
                        z-index: 9998;
                        pointer-events: none;
                        animation: te-amo-float 3s ease-out forwards;
                        text-shadow: 0 0 15px rgba(255, 0, 64, 0.8);
                        filter: drop-shadow(0 0 10px rgba(255, 215, 0, 0.6));
                    `;
                    document.body.appendChild(teAmo);
                    setTimeout(() => teAmo.remove(), 3000);
                }, i * 200);
            }

            // Chuva de "TE AMO" pequenos
            for (let i = 0; i < 15; i++) {
                setTimeout(() => {
                    const miniTeAmo = document.createElement('div');
                    miniTeAmo.innerHTML = '💖 EU TE AMO';
                    miniTeAmo.style.cssText = `
                        position: fixed;
                        left: ${Math.random() * 100}%;
                        top: -50px;
                        font-size: 1.2rem;
                        color: #ff0040;
                        z-index: 9997;
                        pointer-events: none;
                        animation: te-amo-rain ${Math.random() * 3 + 2}s linear forwards;
                        text-shadow: 0 0 10px rgba(255, 0, 64, 0.6);
                    `;
                    document.body.appendChild(miniTeAmo);
                    setTimeout(() => miniTeAmo.remove(), 5000);
                }, i * 150);
            }

            // Efeito de pulso na tela
            const pulseOverlay = document.createElement('div');
            pulseOverlay.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: radial-gradient(circle, rgba(255, 0, 64, 0.1), transparent);
                z-index: 9996;
                pointer-events: none;
                animation: love-pulse 2s ease-in-out;
            `;
            document.body.appendChild(pulseOverlay);
            setTimeout(() => pulseOverlay.remove(), 2000);
        }

        // Explosão de corações vermelhos
        function createHeartExplosion() {
            const hearts = ['❤️', '💖', '💕', '💗', '💓', '💝', '♥️', '💘'];
            
            for (let i = 0; i < 30; i++) {
                setTimeout(() => {
                    const heart = document.createElement('div');
                    heart.className = 'heart-explosion';
                    heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
                    heart.style.left = Math.random() * window.innerWidth + 'px';
                    heart.style.top = Math.random() * window.innerHeight + 'px';
                    heart.style.color = Math.random() > 0.5 ? '#ff0040' : '#ffd700';
                    document.body.appendChild(heart);
                    
                    setTimeout(() => heart.remove(), 2000);
                }, i * 100);
            }
        }

        // Easter egg: triplo clique
        let clickCount = 0;
        let clickTimer;
        
        document.addEventListener('click', (e) => {
            clickCount++;
            clearTimeout(clickTimer);
            
            if (clickCount === 3) {
                // Ativação do modo ultra dark
                document.body.style.filter = 'hue-rotate(30deg) saturate(1.8) brightness(1.2)';
                createHeartExplosion();
                
                // Criar texto flutuante
                const text = document.createElement('div');
                text.innerHTML = '🔥 MODO DARK ULTRA ATIVADO! 🔥';
                text.style.cssText = `
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    font-size: 3rem;
                    font-weight: bold;
                    background: linear-gradient(45deg, #ff0040, #ffd700);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    z-index: 9999;
                    pointer-events: none;
                    animation: ultra-text 3s ease-out forwards;
                    text-shadow: 0 0 20px rgba(255, 0, 64, 0.8);
                `;
                document.body.appendChild(text);
                
                setTimeout(() => {
                    text.remove();
                    document.body.style.filter = '';
                }, 3000);
                
                clickCount = 0;
            } else {
                clickTimer = setTimeout(() => {
                    clickCount = 0;
                }, 1000);
            }
            
            // Efeito de clique vermelho
            const ripple = document.createElement('div');
            ripple.style.cssText = `
                position: fixed;
                left: ${e.clientX - 25}px;
                top: ${e.clientY - 25}px;
                width: 50px;
                height: 50px;
                border: 2px solid #ff0040;
                border-radius: 50%;
                pointer-events: none;
                z-index: 9999;
                animation: ripple-effect 0.8s ease-out forwards;
                box-shadow: 0 0 20px rgba(255, 0, 64, 0.6);
            `;
            document.body.appendChild(ripple);
            setTimeout(() => ripple.remove(), 800);
        });

        // Efeito parallax 3D no mouse
        document.addEventListener('mousemove', (e) => {
            const cards = document.querySelectorAll('.love-card, .photo-frame');
            const mouseX = e.clientX / window.innerWidth;
            const mouseY = e.clientY / window.innerHeight;
            
            cards.forEach((card, index) => {
                const speed = (index + 1) * 0.02;
                const x = (mouseX - 0.5) * 15 * speed;
                const y = (mouseY - 0.5) * 15 * speed;
                
                card.style.transform += ` translate3d(${x}px, ${y}px, 0)`;
            });
        });

        // Efeito de scroll suave
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.3;
            
            document.querySelector('.wave-bg').style.transform = `translateY(${rate}px) scale(1.1)`;
            
            // Parallax das partículas
            const particles = document.querySelectorAll('.particle');
            particles.forEach((particle, index) => {
                const speed = (index % 3 + 1) * 0.1;
                particle.style.transform += ` translateY(${scrolled * speed}px)`;
            });
        });

        // Sistema de notificações românticas dark
        const romanticMessages = [
            "💖 Você é meu mundo inteiro!",
            "🌹 Cada dia com você é especial!",
            "💎 Você é meu tesouro mais precioso!",
            "✨ Meu coração bate só por você!",
            "🥰 Te amo mais a cada segundo!",
            "💕 Você é minha felicidade!",
            "🌟 Minha estrela mais brilhante!",
            "💘 Amor da minha vida toda!"
        ];

        function showNotification() {
            const notification = document.createElement('div');
            const message = romanticMessages[Math.floor(Math.random() * romanticMessages.length)];
            
            notification.innerHTML = message;
            notification.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background: linear-gradient(45deg, #ff0040, #990026);
                color: white;
                padding: 15px 25px;
                border-radius: 25px;
                font-weight: 600;
                z-index: 9999;
                box-shadow: 0 10px 30px rgba(255, 0, 64, 0.4);
                animation: notification-slide 4s ease-in-out forwards;
                backdrop-filter: blur(10px);
                border: 1px solid rgba(255, 0, 64, 0.3);
            `;
            
            document.body.appendChild(notification);
            setTimeout(() => notification.remove(), 4000);
        }

        // Mostrar notificações aleatórias
        setInterval(showNotification, 18000);

        // Sistema de música ambiente visual (dark theme)
        function createSoundWave() {
            const wave = document.createElement('div');
            wave.style.cssText = `
                position: fixed;
                bottom: 20px;
                left: 20px;
                width: 4px;
                height: ${Math.random() * 50 + 10}px;
                background: linear-gradient(to top, #ff0040, #ffd700);
                border-radius: 2px;
                animation: sound-wave 0.5s ease-in-out infinite alternate;
                margin-right: 2px;
                box-shadow: 0 0 10px rgba(255, 0, 64, 0.5);
            `;
            
            const container = document.querySelector('.sound-visualizer') || createSoundContainer();
            container.appendChild(wave);
            
            setTimeout(() => wave.remove(), 1000);
        }

        function createSoundContainer() {
            const container = document.createElement('div');
            container.className = 'sound-visualizer';
            container.style.cssText = `
                position: fixed;
                bottom: 20px;
                left: 20px;
                display: flex;
                align-items: end;
                z-index: 1000;
                gap: 2px;
            `;
            document.body.appendChild(container);
            return container;
        }
@keyframes message-glow {
            0% { text-shadow: 0 0 10px rgba(192, 192, 192, 0.3); }
            100% { text-shadow: 0 0 20px rgba(192, 192, 192, 0.6), 0 0 30px rgba(255, 0, 64, 0.2); }
        }

        /* Botão dark theme */
        .surprise-btn {
            background: linear-gradient(45deg, var(--accent-red), var(--deep-red));
            color: var(--white);
            border: none;
            padding: 25px 50px;
            font-size: 1.4rem;
            font-weight: 600;
            border-radius: 60px;
            cursor: pointer;
            position: relative;
            overflow: hidden;
            transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
            margin: 40px 0;
            box-shadow: 
                0 15px 35px rgba(255, 0, 64, 0.4),
                inset 0 1px 0 rgba(255, 255, 255, 0.2);
            animation: btn-pulse 3s ease-in-out infinite;
            border: 2px solid var(--neon-red);
        }

        .surprise-btn::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 215, 0, 0.3), transparent);
            transition: left 0.5s;
        }

        .surprise-btn:hover::before {
            left: 100%;
        }

        .surprise-btn:hover {
            transform: translateY(-5px) scale(1.05);
            box-shadow: 
                0 25px 50px rgba(255, 0, 64, 0.6),
                0 0 30px var(--gold);
        }

        @keyframes btn-pulse {
            0%, 100% { box-shadow: 0 15px 35px rgba(255, 0, 64, 0.4); }
            50% { box-shadow: 0 15px 35px rgba(255, 0, 64, 0.6), 0 0 20px var(--gold); }
        }

        /* Galeria de fotos - 3 por linha mobile-first */
        .photo-gallery {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 15px;
            margin: 60px 0;
            perspective: 1000px;
        }

        .photo-frame {
            aspect-ratio: 1;
            background: linear-gradient(135deg, 
                var(--card-black) 0%, 
                var(--secondary-black) 50%, 
                var(--card-black) 100%);
            border-radius: 20px;
            padding: 8px;
            box-shadow: 
                0 15px 35px rgba(0, 0, 0, 0.8),
                inset 0 1px 0 rgba(255, 0, 64, 0.3),
                0 0 25px rgba(255, 0, 64, 0.1);
            position: relative;
            overflow: hidden;
            transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
            animation: frame-float 5s ease-in-out infinite;
            border: 1px solid rgba(255, 0, 64, 0.4);
        }

        .photo-frame:nth-child(1) { animation-delay: 0s; }
        .photo-frame:nth-child(2) { animation-delay: 0.3s; }
        .photo-frame:nth-child(3) { animation-delay: 0.6s; }
        .photo-frame:nth-child(4) { animation-delay: 0.9s; }
        .photo-frame:nth-child(5) { animation-delay: 1.2s; }
        .photo-frame:nth-child(6) { animation-delay: 1.5s; }

        @keyframes frame-float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
        }

        .photo-frame img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 15px;
            transition: all 0.4s ease;
            filter: brightness(0.95) contrast(1.15) saturate(1.1);
        }

        .photo-frame::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, 
                rgba(255, 0, 64, 0.2) 0%, 
                transparent 50%, 
                rgba(255, 0, 64, 0.2) 100%);
            border-radius: 20px;
            opacity: 0;
            transition: all 0.4s ease;
            z-index: 1;
        }

        .photo-frame:hover::before {
            opacity: 1;
            animation: photo-shine 1s ease-in-out;
        }

        @keyframes photo-shine {
            0% { transform: translateX(-100%) skew(-15deg); }
            100% { transform: translateX(100%) skew(-15deg); }
        }

        .photo-frame:hover {
            transform: translateY(-10px) scale(1.05);
            box-shadow: 
                0 25px 50px rgba(0, 0, 0, 0.9),
                0 0 40px rgba(255, 0, 64, 0.4),
                inset 0 1px 0 rgba(255, 0, 64, 0.5);
            border-color: rgba(255, 0, 64, 0.8);
        }

        .photo-frame:hover img {
            filter: brightness(1.1) contrast(1.25) saturate(1.2);
            transform: scale(1.02);
        }

        /* Texto de fallback melhorado */
        .photo-frame[data-fallback] {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
            color: var(--accent-red);
            text-align: center;
            background: linear-gradient(135deg, 
                rgba(17, 17, 17, 0.9) 0%, 
                rgba(26, 26, 26, 0.95) 50%, 
                rgba(17, 17, 17, 0.9) 100%);
        }

        .photo-frame[data-fallback] small {
            font-size: 0.7rem;
            color: var(--silver);
            margin-top: 8px;
            opacity: 0.8;
        }

        /* Mensagem especial dark theme */
        .special-message {
            background: var(--glass-bg);
            backdrop-filter: blur(25px);
            border-radius: 25px;
            padding: 50px;
            margin: 60px 0;
            border: 2px solid var(--glass-border);
            opacity: 0;
            transform: translateY(50px) scale(0.9);
            transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
            position: relative;
            overflow: hidden;
        }

        .special-message::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, 
                transparent, 
                rgba(255, 0, 64, 0.1), 
                rgba(255, 215, 0, 0.1), 
                transparent);
            animation: message-wave 4s ease-in-out infinite;
        }

        @keyframes message-wave {
            0% { left: -100%; }
            100% { left: 100%; }
        }

        .special-message.show {
            opacity: 1;
            transform: translateY(0) scale(1);
            box-shadow: 
                0 25px 50px rgba(0, 0, 0, 0.7),
                0 0 40px rgba(255, 0, 64, 0.2);
        }

        .special-message h3 {
            background: linear-gradient(45deg, var(--accent-red), var(--gold), var(--neon-red));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 30px;
            text-align: center;
            animation: special-glow 2s ease-in-out infinite alternate;
        }

        @keyframes special-glow {
            0% { filter: brightness(1); }
            100% { filter: brightness(1.3) drop-shadow(0 0 10px var(--accent-red)); }
        }

        .special-message p {
            color: var(--silver);
            font-size: 1.3rem;
            line-height: 1.8;
            text-align: center;
            font-weight: 300;
        }

        /* Footer dark theme */
        .footer {
            text-align: center;
            padding: 60px 0;
            color: var(--silver);
            font-size: 1.3rem;
            position: relative;
        }

        .footer::before {
            content: '';
            position: absolute;
            top: -30px;
            left: 50%;
            transform: translateX(-50%);
            width: 300px;
            height: 2px;
            background: linear-gradient(90deg, var(--accent-red), var(--gold), var(--accent-red));
            border-radius: 1px;
            animation: footer-line 3s ease-in-out infinite alternate;
        }

        @keyframes footer-line {
            0% { width: 100px; opacity: 0.5; }
            100% { width: 300px; opacity: 1; }
        }

        .heart-beat {
            color: var(--accent-red);
            animation: mega-heartbeat 1s ease-in-out infinite;
            font-size: 2rem;
            display: inline-block;
            filter: drop-shadow(0 0 10px var(--accent-red));
        }

        @keyframes mega-heartbeat {
            0%, 100% { transform: scale(1); }
            25% { transform: scale(1.3) rotate(5deg); }
            50% { transform: scale(1.1) rotate(-5deg); }
            75% { transform: scale(1.2) rotate(3deg); }
        }

        /* Efeitos de explosão dark */
        .heart-explosion {
            position: fixed;
            pointer-events: none;
            z-index: 9999;
            font-size: 2rem;
            animation: heart-explode 2s ease-out forwards;
        }

        @keyframes heart-explode {
            0% { 
                transform: scale(0) rotate(0deg); 
                opacity: 1; 
            }
            50% { 
                transform: scale(1.5) rotate(180deg); 
                opacity: 1; 
            }
            100% { 
                transform: scale(0.5) rotate(360deg); 
                opacity: 0; 
            }
        }

        /* Loading dark theme */
        .loading-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, var(--primary-black), var(--secondary-black));
            z-index: 10000;
            display: flex;
            align-items: center;
            justify-content: center;
            animation: fadeOut 2s ease-in-out 3s forwards;
        }

        .loading-heart {
            font-size: 4rem;
            animation: loading-pulse 1s ease-in-out infinite;
            color: var(--accent-red);
            filter: drop-shadow(0 0 20px var(--accent-red));
        }

        @keyframes loading-pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.5) rotate(45deg); }
        }

        @keyframes fadeOut {
            to { opacity: 0; visibility: hidden; }
        }

        /* Responsivo melhorado - Mobile First */
        @media (max-width: 480px) {
            .header h1 { 
                font-size: 2.8rem; 
                margin-bottom: 15px;
            }
            .header p { 
                font-size: 1.1rem; 
            }
            .love-card { 
                padding: 30px 20px; 
                margin: 30px 0;
                border-radius: 20px;
            }
            .love-card h2 { 
                font-size: 2.2rem; 
                margin-bottom: 25px;
            }
            .love-message { 
                font-size: 1.1rem; 
                margin-bottom: 30px;
            }
            .surprise-btn {
                padding: 18px 35px;
                font-size: 1.2rem;
            }
            .photo-gallery { 
                grid-template-columns: repeat(3, 1fr);
                gap: 10px; 
                margin: 40px 0;
            }
            .photo-frame {
                border-radius: 15px;
                padding: 6px;
            }
            .photo-frame img {
                border-radius: 10px;
            }
            .photo-frame[data-fallback] {
                font-size: 1.5rem;
            }
            .photo-frame[data-fallback] small {
                font-size: 0.6rem;
                margin-top: 5px;
            }
            .special-message {
                padding: 30px 20px;
                border-radius: 20px;
            }
            .special-message h3 {
                font-size: 2rem;
            }
            .special-message p {
                font-size: 1.1rem;
            }
        }

        @media (min-width: 481px) and (max-width: 768px) {
            .header h1 { 
                font-size: 3.5rem; 
            }
            .love-card { 
                padding: 50px 35px; 
            }
            .love-card h2 { 
                font-size: 2.8rem; 
            }
            .photo-gallery { 
                grid-template-columns: repeat(3, 1fr);
                gap: 20px; 
            }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
            .photo-gallery { 
                grid-template-columns: repeat(3, 1fr);
                gap: 25px; 
            }
        }

        @media (min-width: 1025px) {
            .photo-gallery { 
                grid-template-columns: repeat(3, 1fr);
                gap: 30px; 
                max-width: 900px;
                margin-left: auto;
                margin-right: auto;
            }
        }

        /* Animações de entrada */
        @keyframes slideDown {
            from { opacity: 0; transform: translateY(-50px); }
            to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideUp {
            from { opacity: 0; transform: translateY(50px); }
            to { opacity: 1; transform: translateY(0); }
                    }

                        }
            }
            
            @keyframes sound-wave {
                0% { height: 10px; }
                100% { height: 50px; }
            }
            
            @keyframes te-amo-main {
                0% { 
                    opacity: 0; 
                    transform: translate(-50%, -50%) scale(0) rotate(0deg); 
                    background-position: 0% 50%;
                }
                20% { 
                    opacity: 1; 
                    transform: translate(-50%, -50%) scale(1.5) rotate(5deg); 
                    background-position: 100% 50%;
                }
                40% { 
                    transform: translate(-50%, -50%) scale(1.2) rotate(-3deg); 
                    background-position: 0% 50%;
                }
                60% { 
                    transform: translate(-50%, -50%) scale(1.3) rotate(2deg); 
                    background-position: 100% 50%;
                }
                80% { 
                    transform: translate(-50%, -50%) scale(1.1) rotate(0deg); 
                    background-position: 0% 50%;
                }
                100% { 
                    opacity: 0; 
                    transform: translate(-50%, -50%) scale(0.5) rotate(0deg); 
                    background-position: 100% 50%;
                }
            }
            
            @keyframes te-amo-float {
                0% { 
                    opacity: 0; 
                    transform: scale(0) rotate(0deg); 
                }
                20% { 
                    opacity: 1; 
                    transform: scale(1.2) rotate(10deg); 
                }
                50% { 
                    opacity: 1; 
                    transform: scale(1) rotate(-5deg) translateY(-20px); 
                }
                80% { 
                    opacity: 1; 
                    transform: scale(1.1) rotate(5deg) translateY(-40px); 
                }
                100% { 
                    opacity: 0; 
                    transform: scale(0.5) rotate(0deg) translateY(-60px); 
                }
            }
            
            @keyframes te-amo-rain {
                0% { 
                    opacity: 0; 
                    transform: translateY(-50px) rotate(0deg) scale(0.8); 
                }
                10% { 
                    opacity: 1; 
                    transform: translateY(0px) rotate(10deg) scale(1); 
                }
                90% { 
                    opacity: 1; 
                    transform: translateY(calc(100vh - 100px)) rotate(-10deg) scale(0.9); 
                }
                100% { 
                    opacity: 0; 
                    transform: translateY(100vh) rotate(0deg) scale(0.5); 
                }
            }
            
            @keyframes love-pulse {
                0% { 
                    opacity: 0; 
                    transform: scale(0.8); 
                }
                50% { 
                    opacity: 1; 
                    transform: scale(1.2); 
                }
                100% { 
                    opacity: 0; 
                    transform: scale(1.5); 
                }
            }
            
            .animate-in {
                animation: slideUp 0.8s ease-out forwards;
            }
        `;
        document.head.appendChild(extraStyles);

        console.log('💖 Site de Amor carregado com sucesso! Feliz Dia dos Namorados! ✨');
    </script>
