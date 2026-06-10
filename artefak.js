<script>
        document.querySelectorAll('.card-artefak').forEach(card => {
            card.addEventListener('click', function(e) {
                // Jika yang diklik adalah link teks di dalam kartu secara langsung, biarkan link asli bekerja
                if (e.target.closest('.btn-link')) return;

                // Cari link pertama yang ada di dalam kartu tersebut
                const firstLink = this.querySelector('.btn-link');
                if (firstLink) {
                    const url = firstLink.getAttribute('href');
                    if (url && url !== '#') {
                        window.open(url, '_blank'); // Buka dokumen di tab baru
                    }
                }
            });
        });
    </script>
</body>
</html>

<script src="artefak.js" defer></script>