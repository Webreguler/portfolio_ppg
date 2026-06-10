<script>
        function toggleDetailProfil() {
            const container = document.getElementById('detailContentContainer');
            const button = document.getElementById('btnToggleDetail');
            
            // Cek status display container
            if (container.style.display === 'none') {
                container.style.display = 'block';
                button.textContent = 'Sembunyikan Detail';
                button.classList.remove('btn-collapsed');
            } else {
                container.style.display = 'none';
                button.textContent = 'Tampilkan Detail';
                button.classList.add('btn-collapsed');
            }
        }
    </script>