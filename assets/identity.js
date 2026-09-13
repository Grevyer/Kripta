const KriptaIdentity = (() => {
  const STORAGE_KEY = 'kripta_identity';
  const SAMPLE_SENDER = {
    name: 'Pengirim Contoh',
    fingerprint: 'B7:3E:52:9A:1D:84:CF:60:2B:77:E5:08:93:AD:41:D6'
  };

  function randomFingerprint() {
    const bytes = new Uint8Array(16);
    crypto.getRandomValues(bytes);
    return Array.from(bytes).map((b) => b.toString(16).padStart(2, '0').toUpperCase()).join(':');
  }

  function slug(text) {
    return text.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '');
  }

  function today() {
    return new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' });
  }

  function get() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  }

  function save(identity) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(identity));
    } catch (e) {}
  }

  function reset() {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {}
  }

  return { get, save, reset, randomFingerprint, slug, today, SAMPLE_SENDER };
})();
