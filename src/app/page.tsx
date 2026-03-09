'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { SUBJECTS_DATA, ModuleData } from '../data/questions';

export default function ExamPage() {
    const [view, setView] = useState<'home' | 'quiz' | 'results'>('home');
    const [activeModuleCode, setActiveModuleCode] = useState<'DSNM' | 'WAN' | 'WC' | 'ISM' | null>(null);
    const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
    const [timeLeft, setTimeLeft] = useState(3600);
    const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
    const [modalModule, setModalModule] = useState<'DSNM' | 'WAN' | 'WC' | 'ISM' | null>(null);
    const [agreed, setAgreed] = useState(false);
    const [startIndex, setStartIndex] = useState(0);

    const activeModule: ModuleData | null = activeModuleCode ? SUBJECTS_DATA[activeModuleCode] : null;
    const questions = activeModule?.questions || [];
    const correctAnswers = activeModule?.answers || {};
    const currentQuestion = questions[currentQuestionIdx];

    useEffect(() => {
        if (view !== 'quiz') return;
        const timer = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(timer);
    }, [view]);

    useEffect(() => {
        if (timeLeft === 0 && view === 'quiz') handleSubmit();
    }, [timeLeft, view]);

    const formatTime = (seconds: number) => {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        return `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    };

    const handleOptionChange = (questionId: number, option: string) => {
        if (view !== 'quiz') return;
        setSelectedAnswers(prev => ({ ...prev, [questionId]: option }));
    };

    const handleSubmit = () => setView('results');

    const openModal = (moduleCode: 'DSNM' | 'WAN' | 'WC' | 'ISM') => {
        setModalModule(moduleCode);
        setAgreed(false);
    };

    const closeModal = () => {
        setModalModule(null);
        setAgreed(false);
    };

    const confirmStart = () => {
        if (!modalModule || !agreed) return;
        setActiveModuleCode(modalModule);
        setCurrentQuestionIdx(0);
        setSelectedAnswers({});
        setTimeLeft(3600);

        setView('quiz');
        closeModal();
    };

    const renderHeader = () => (
        <header className="header" style={{ borderBottom: view === 'results' ? '1px solid #eee' : '4px solid var(--maroon)' }}>
            <div className="logo-section">
                <Image src="/image-removebg-preview-removebg-preview.png" alt="SLIIT NetExam" width={400} height={100} style={{ objectFit: 'contain' }} />
            </div>
            <div className="user-profile">
                <Image src="/user_avatar_professional.png" alt="User Avatar" width={30} height={30} style={{ borderRadius: '50%', objectFit: 'cover' }} />
                <span>it236xxxxx John Doe</span>
            </div>
        </header>
    );

    const renderFooter = () => (
        <footer className="home-footer">
            <span>&#169; 2026 Created by Vehan Rajintha</span>
            <a href="https://github.com/VehanRajintha" target="_blank" rel="noopener noreferrer" className="footer-github-link" aria-label="GitHub Profile">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
            </a>
        </footer>
    );

    // ── HOME ─────────────────────────────────────────────────────────────────────
    if (view === 'home') {
        const mod = modalModule ? SUBJECTS_DATA[modalModule] : null;
        const allModules = ['DSNM', 'WAN', 'WC', 'ISM'] as const;

        const handleNext = () => {
            if (startIndex < allModules.length - 3) {
                setStartIndex(prev => prev + 1);
            }
        };

        const handlePrev = () => {
            if (startIndex > 0) {
                setStartIndex(prev => prev - 1);
            }
        };

        return (
            <div className="container" style={{ backgroundColor: '#fff', minHeight: '100vh', color: '#000', display: 'flex', flexDirection: 'column' }}>
                {renderHeader()}
                <main className="home-container" style={{ flex: 1 }}>
                    <div className="breadcrumb">
                        Dashboard / My courses / <span>MID Examination</span>
                    </div>
                    <div className="subject-hierarchy">
                        <h2 className="exam-category">MID Examination</h2>
                        <h3 className="sub-category">CSNE - Computer Systems &amp; Network Engineering</h3>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '20px 0', width: '100%' }}>
                        <button
                            onClick={handlePrev}
                            disabled={startIndex === 0}
                            style={{
                                borderRadius: '50%',
                                border: 'none',
                                backgroundColor: startIndex === 0 ? '#f0f0f0' : '#800000',
                                color: startIndex === 0 ? '#ccc' : '#fff',
                                cursor: startIndex === 0 ? 'not-allowed' : 'pointer',
                                width: '40px',
                                height: '40px',
                                fontSize: '1.2rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0,
                                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                            }}
                        >
                            &#10094;
                        </button>

                        <div style={{ display: 'flex', gap: '25px', flex: 1, overflow: 'hidden', padding: '10px 0' }}>
                            {allModules.map((code) => (
                                <div
                                    key={code}
                                    className="module-card"
                                    style={{
                                        margin: 0,
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        flex: '0 0 calc((100% - 50px) / 3)',
                                        transition: 'transform 0.5s ease-in-out',
                                        transform: `translateX(calc(-${startIndex * 100}% - ${startIndex * 25}px))`
                                    }}
                                >
                                    <h1 className="module-title" style={{ fontSize: '1.2rem', marginBottom: '15px' }}>{SUBJECTS_DATA[code].title}</h1>
                                    <div className="practice-notice" style={{ fontSize: '0.85rem', marginBottom: '15px' }}>
                                        <p>Professional simulation of the official SLIIT exam experience.</p>
                                    </div>
                                    <div style={{ fontSize: '0.8rem', color: '#666', marginBottom: '20px', flex: 1 }}>
                                        <ul style={{ paddingLeft: '20px', margin: 0 }}>
                                            <li>Questions: {SUBJECTS_DATA[code].questions.length}</li>
                                            <li>Time: 60 Minutes</li>
                                        </ul>
                                    </div>
                                    <div style={{ textAlign: 'center' }}>
                                        <button className="start-btn" onClick={() => openModal(code)} style={{ padding: '10px 30px', fontSize: '0.95rem' }}>
                                            Start Attempt
                                        </button>
                                        {SUBJECTS_DATA[code].notebookLlmLink && (
                                            <div style={{ marginTop: '15px' }}>
                                                <a
                                                    href={SUBJECTS_DATA[code].notebookLlmLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    style={{
                                                        display: 'inline-block',
                                                        padding: '8px 20px',
                                                        backgroundColor: '#f0f4f8',
                                                        color: '#0056b3',
                                                        textDecoration: 'none',
                                                        borderRadius: '5px',
                                                        fontSize: '0.85rem',
                                                        fontWeight: '500',
                                                        border: '1px solid #cce5ff',
                                                        transition: 'background-color 0.2s',
                                                    }}
                                                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#e6f0fa'}
                                                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#f0f4f8'}
                                                >
                                                    📚 Learn with Notebook LLM
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={handleNext}
                            disabled={startIndex >= allModules.length - 3}
                            style={{
                                borderRadius: '50%',
                                border: 'none',
                                backgroundColor: startIndex >= allModules.length - 3 ? '#f0f0f0' : '#800000',
                                color: startIndex >= allModules.length - 3 ? '#ccc' : '#fff',
                                cursor: startIndex >= allModules.length - 3 ? 'not-allowed' : 'pointer',
                                width: '40px',
                                height: '40px',
                                fontSize: '1.2rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0,
                                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                            }}
                        >
                            &#10095;
                        </button>
                    </div>

                    <div style={{ maxWidth: '1200px', margin: '20px auto', padding: '0 20px' }}>
                        <div style={{ fontSize: '0.85rem', color: '#666', fontStyle: 'italic', borderTop: '1px solid #eee', paddingTop: '15px' }}>
                            <strong>Data Privacy Assurance:</strong> This platform is designed solely for educational purposes. We do not collect, store, or transmit any personal data, session information, or examination results.
                        </div>
                    </div>
                </main>

                {renderFooter()}

                {/* ── Disclaimer Modal — inlined JSX so React never remounts it on state change ── */}
                {mod && (
                    <div className="modal-backdrop" onClick={closeModal}>
                        <div className="modal-box" onClick={(e) => e.stopPropagation()}>
                            <div className="modal-header">
                                <div className="modal-header-left">
                                    <div className="modal-badge">MID Exam</div>
                                    <h2 className="modal-title">Before You Begin</h2>
                                    <p className="modal-subtitle">{mod.title}</p>
                                </div>
                                <div className="modal-header-stats">
                                    <div className="modal-stat">
                                        <span className="modal-stat-val">{mod.questions.length}</span>
                                        <span className="modal-stat-label">Questions</span>
                                    </div>
                                    <div className="modal-stat-divider" />
                                    <div className="modal-stat">
                                        <span className="modal-stat-val">60</span>
                                        <span className="modal-stat-label">Minutes</span>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-body">
                                <div className="modal-instructions-grid" style={{ gridTemplateColumns: '1fr' }}>
                                    <div className="modal-instruction-item"><span className="mi-icon">⏱</span><div><strong>Timed Exam</strong><br />60 minutes total. Timer starts immediately.</div></div>
                                    <div className="modal-instruction-item"><span className="mi-icon">🔄</span><div><strong>Free Navigation</strong><br />Jump between questions using the side panel.</div></div>
                                    <div className="modal-instruction-item"><span className="mi-icon">⚡</span><div><strong>Auto-Submit</strong><br />Quiz submits automatically when time runs out.</div></div>
                                </div>
                                <div className="modal-disclaimer">
                                    <span className="modal-disclaimer-icon">⚠</span>
                                    <p>This is a <strong>practice simulation</strong> for educational purposes only — not an official SLIIT exam. No personal data is collected or stored.</p>
                                </div>
                                <label className="modal-agree-label">
                                    <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} className="modal-agree-checkbox" />
                                    <span>I have read and agree to the instructions above.</span>
                                </label>
                            </div>
                            <div className="modal-footer">
                                <button className="modal-cancel-btn" onClick={closeModal}>Cancel</button>
                                <button className={`modal-continue-btn ${agreed ? 'active' : ''}`} onClick={confirmStart} disabled={!agreed}>
                                    Start Exam &nbsp;→
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }

    // ── RESULTS ───────────────────────────────────────────────────────────────────
    if (view === 'results') {
        const score = Object.keys(correctAnswers).reduce((acc, qId) => {
            return acc + (selectedAnswers[Number(qId)] === correctAnswers[Number(qId)] ? 1 : 0);
        }, 0);

        return (
            <div className="container" style={{ backgroundColor: '#fff', minHeight: '100vh', color: '#000' }}>
                {renderHeader()}
                <main className="main-content" style={{ display: 'block', maxWidth: '1000px', margin: '40px auto' }}>
                    <div className="results-header">
                        <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>{activeModule?.title} - Summary</h2>
                        <p style={{ fontSize: '1.2rem', color: '#666' }}>Your score: {score} / {questions.length} ({(score / questions.length * 100).toFixed(1)}%)</p>
                    </div>
                    {questions.map((q) => {
                        const isCorrect = selectedAnswers[q.id] === correctAnswers[q.id];
                        return (
                            <div key={q.id} className="result-item">
                                <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>Question {q.id}: {q.text}</p>
                                <p style={{ fontSize: '0.95rem' }}>Your answer: <span style={{ fontWeight: 500 }}>{selectedAnswers[q.id] || '(No answer provided)'}</span></p>
                                {!isCorrect && <p style={{ fontSize: '0.95rem', color: '#666', marginTop: '5px' }}>Correct answer: {correctAnswers[q.id]}</p>}
                                <div className={isCorrect ? 'result-correct' : 'result-wrong'}>
                                    {isCorrect ? '✓ Correct' : '✗ Incorrect'}
                                </div>
                            </div>
                        );
                    })}
                    <div style={{ textAlign: 'center', marginTop: '40px', marginBottom: '60px' }}>
                        <button className="start-btn" onClick={() => setView('home')}>Back to Home</button>
                    </div>
                    <a href="https://wa.me/94713910417?text=I%20have%20an%20inquiry%20regarding%20my%20exam%20results." target="_blank" rel="noopener noreferrer" className="float-enquiry-btn">
                        Inquiry
                    </a>
                </main>
                {renderFooter()}
            </div>
        );
    }

    // ── QUIZ ──────────────────────────────────────────────────────────────────────
    return (
        <div className="container" style={{ backgroundColor: '#fff', minHeight: '100vh', color: '#000' }}>
            {renderHeader()}
            <div style={{ padding: '10px 20px', backgroundColor: '#fff', fontSize: '0.8rem', color: '#666' }}>
                Dashboard / My courses / MID Examination / CSNE / <span>{activeModuleCode} Quiz</span>
            </div>
            <main className="main-content">
                <aside className="left-sidebar">
                    <div className="question-status-box">
                        <p style={{ fontWeight: 'bold' }}>Question {currentQuestion.id}</p>
                        <p style={{ fontSize: '0.8rem', color: '#666' }}>{selectedAnswers[currentQuestion.id] ? 'Answered' : 'Not yet answered'}</p>
                        <p style={{ fontSize: '0.8rem', color: '#666', marginBottom: '10px' }}>Marked out of {currentQuestion.marks.toFixed(2)}</p>
                        <div style={{ fontSize: '0.8rem', color: '#666', cursor: 'pointer' }}>🚩 Flag question</div>
                    </div>
                </aside>

                <section className="question-area">
                    <div className="question-box">
                        {currentQuestion.imageUrl ? (
                            <div style={{ marginBottom: '20px' }}>
                                <Image
                                    src={currentQuestion.imageUrl}
                                    alt={`Question ${currentQuestion.id}`}
                                    width={800}
                                    height={200}
                                    style={{
                                        width: '100%',
                                        maxWidth: '800px',
                                        height: 'auto',
                                        objectFit: 'contain'
                                    }}
                                />
                            </div>
                        ) : (
                            <p style={{ marginBottom: '20px', fontSize: '1.1rem' }}>{currentQuestion.text}</p>
                        )}
                        <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '15px' }}>Select one:</p>
                        {currentQuestion.options.map((opt, i) => (
                            <div key={i} className="option">
                                <input type="radio" id={`opt-${i}`} name={`quiz-opt-${currentQuestion.id}`} checked={selectedAnswers[currentQuestion.id] === opt} onChange={() => handleOptionChange(currentQuestion.id, opt)} style={{ width: '18px', height: '18px' }} />
                                <label htmlFor={`opt-${i}`} style={{ fontSize: '1rem' }}>{opt}</label>
                            </div>
                        ))}
                    </div>
                    {currentQuestionIdx === questions.length - 1 ? (
                        <button className="next-button" onClick={handleSubmit} style={{ backgroundColor: '#c62828' }}>Finish attempt</button>
                    ) : (
                        <button className="next-button" onClick={() => setCurrentQuestionIdx((prev) => (prev + 1) % questions.length)}>Next page</button>
                    )}
                </section>

                <aside className="right-sidebar">
                    <div className="timer-section">
                        <h3 style={{ fontSize: '1.1rem', marginBottom: '10px' }}>≡ Quiz navigation</h3>
                        <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '10px' }}>Finish attempt ...</p>
                        <p style={{ fontWeight: 'bold' }}>Time left {formatTime(timeLeft)}</p>
                    </div>
                    <div className="quiz-nav-grid">
                        {questions.map((q, i) => (
                            <div key={q.id} className={`nav-item ${currentQuestionIdx === i ? 'active' : ''} ${selectedAnswers[q.id] ? 'answered' : ''}`} onClick={() => setCurrentQuestionIdx(i)}>
                                <div className="nav-item-num">{i + 1}</div>
                                <div className="nav-item-status"></div>
                            </div>
                        ))}
                    </div>
                </aside>
            </main>
        </div>
    );
}
