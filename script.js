
    <script>
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
