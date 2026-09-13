const KriptaIdentity = (() => {
  const STORAGE_KEY = 'kripta_identity';
  const DEFAULT_IDENTITY = {
    name: 'Budi Santoso',
    fingerprint: 'A3:F2:91:7C:5D:8E:44:B0:2A:66:0F:9C:31:D7:55:E8',
    createdAt: '10 Sep 2026'
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
      return raw ? JSON.parse(raw) : DEFAULT_IDENTITY;
    } catch (e) {
      return DEFAULT_IDENTITY;
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

  return { get, save, reset, randomFingerprint, slug, today, DEFAULT_IDENTITY };
})();
