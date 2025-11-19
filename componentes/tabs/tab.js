  // === TABS SCRIPT ===
        function openTab(evt, tabId) {
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.getElementById(tabId).classList.add('active');
            evt.currentTarget.classList.add('active');
        }

        // === MODAL SCRIPT ===
        function openModal() {
            document.getElementById('modal').classList.add('active');
        }
        function closeModal() {
            document.getElementById('modal').classList.remove('active');
        }
        function closeModalOutside(event) {
            if (event.target.id === 'modal') closeModal();
        }