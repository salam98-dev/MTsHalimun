java
<section id="auth-page" class="animate-enter">
    <div class="row justify-content-center">
        <div class="col-md-5">
            <div class="card shadow-lg border-0">
                <div class="card-body p-5">
                    <ul class="nav nav-pills nav-justified mb-4" id="pills-tab" role="tablist">
                        <li class="nav-item">
                            <button class="nav-link active" id="tab-login" data-bs-toggle="pill" data-bs-target="#panel-login">Masuk</button>
                        </li>
                        <li class="nav-item">
                            <button class="nav-link" id="tab-daftar" data-bs-toggle="pill" data-bs-target="#panel-daftar">Daftar</button>
                        </li>
                    </ul>

                    <div class="tab-content">
                        <div class="tab-pane fade show active" id="panel-login">
                            <div class="text-center mb-4">
                                <h3 class="fw-bold">Selamat Datang</h3>
                                <p class="text-muted">Silakan masuk ke akun E-Learning Anda</p>
                            </div>
                            <form onsubmit="handleAuth(event, 'login')">
                                <div class="mb-3">
                                    <label class="form-label small fw-bold">Masuk Sebagai</label>
                                    <select class="form-select" id="login-role" required>
                                        <option value="murid">Siswa/Murid</option>
                                        <option value="guru">Guru</option>
                                        <option value="admin">Administrator</option>
                                    </select>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label small fw-bold">Alamat Gmail</label>
                                    <div class="input-group">
                                        <span class="input-group-text bg-white"><i class="fas fa-envelope text-muted"></i></span>
                                        <input type="email" class="form-control" placeholder="nama@gmail.com" required>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label small fw-bold">Password</label>
                                    <div class="input-group">
                                        <span class="input-group-text bg-white"><i class="fas fa-lock text-muted"></i></span>
                                        <input type="password" class="form-control" placeholder="••••••••" required>
                                    </div>
                                </div>
                                <button type="submit" class="btn btn-primary w-100 py-2 fw-bold">MASUK</button>
                            </form>
                        </div>

                        <div class="tab-pane fade" id="panel-daftar">
                            <div class="text-center mb-4">
                                <h3 class="fw-bold">Buat Akun Baru</h3>
                                <p class="text-muted">Gunakan Gmail aktif untuk mendaftar</p>
                            </div>
                            <form onsubmit="handleAuth(event, 'register')">
                                <div class="mb-3">
                                    <label class="form-label small fw-bold">Daftar Sebagai</label>
                                    <div class="d-flex gap-2">
                                        <input type="radio" class="btn-check" name="role" id="role-murid" value="murid" checked>
                                        <label class="btn btn-outline-secondary flex-fill" for="role-murid">Murid</label>
                                        
                                        <input type="radio" class="btn-check" name="role" id="role-guru" value="guru">
                                        <label class="btn btn-outline-secondary flex-fill" for="role-guru">Guru</label>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label small fw-bold">Nama Lengkap</label>
                                    <input type="text" class="form-control" placeholder="Masukkan nama asli" required>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label small fw-bold">Email Gmail</label>
                                    <input type="email" class="form-control" placeholder="username@gmail.com" required>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label small fw-bold">Buat Password</label>
                                    <input type="password" class="form-control" placeholder="Minimal 8 karakter" required>
                                </div>
                                <button type="submit" class="btn btn-success w-100 py-2 fw-bold">DAFTAR SEKARANG</button>
                            </form>
                        </div>
                    </div>
                    
                    <div class="text-center mt-4">
                        <hr>
                        <small class="text-muted">Atau masuk dengan cepat melalui</small>
                        <div class="mt-2">
                            <button class="btn btn-outline-danger btn-sm"><i class="fab fa-google me-2"></i>Google Workspace</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>