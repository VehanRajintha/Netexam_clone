'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface Question {
    id: number;
    type: 'single' | 'multiple';
    text: string;
    options: string[];
    marks: number;
}

const mockQuestions: Question[] = [
    {
        id: 1,
        text: "Which specific area of the ISO Network Management framework is concerned with gathering statistics to establish usage quotas and ensuring users have a fair share of resources?",
        options: ["Configuration Management", "Fault Management", "Accounting Management", "Performance Management"],
        type: 'single',
        marks: 1.0,
    },
    {
        id: 2,
        text: "In the context of fault management, what is a primary disadvantage of relying solely on an interrupt-driven approach for data collection?",
        options: [
            "It consumes significantly higher bandwidth than polling.",
            "It is unable to detect critical events like link failures.",
            "It relies on periodic test packets that distort network behavior.",
            "It may not facilitate effective fault management due to its reactive nature."
        ],
        type: 'single',
        marks: 1.0,
    },
    {
        id: 3,
        text: "When implementing a Storage Area Network (SAN), which protocol is typically used for data transmission between servers and storage elements?",
        options: ["Encapsulated SCSI", "CIFS (Common Internet File System)", "HTTP (Hypertext Transfer Protocol)", "NFS (Network File System)"],
        type: 'single',
        marks: 1.0,
    },
    {
        id: 4,
        text: "Statistically, at which levels of the OSI reference model do approximately network errors occur?",
        options: ["Physical, Data link, and Network layers", "Transport and Network layers only", "Application, Presentation, and Session layers", "Data link and Transport layers"],
        type: 'single',
        marks: 1.0,
    },
    {
        id: 5,
        text: "Network baselining is defined as the act of measuring and rating network performance in real-time. What is the primary purpose of comparing this data to historical metrics?",
        options: [
            "To identify trends and determine the effectiveness of configuration changes.",
            "To eliminate the need for future network hardware upgrades.",
            "To replace active monitoring with passive data collection.",
            "To automate the process of physical layer connectivity testing."
        ],
        type: 'single',
        marks: 1.0,
    },
    {
        id: 6,
        text: "In the context of Network Mapping, why is 'Non-network information' such as service contracts and vendor lists considered vital?",
        options: [
            "It allows the NMS to automatically map the Data link layer.",
            "It provides the technical parameters needed for configuring OSPF and RIP.",
            "It is essential for day-to-day management tasks and authorizing purchases.",
            "It defines the encryption standards used for LDAP Security."
        ],
        type: 'single',
        marks: 1.0,
    },
    {
        id: 7,
        text: "When storing configuration management data, what is a significant disadvantage of using a Structured (DBMS) approach compared to an Unstructured (ASCII) approach?",
        options: [
            "It is unable to provide complex data relationships or versioning.",
            "It is significantly slower to search through large datasets.",
            "It cannot be accessed from remote locations over the network.",
            "It involves higher administrative overheads and requires learning a query language."
        ],
        type: 'single',
        marks: 1.0,
    },
    {
        id: 8,
        text: "Active Monitoring involves sending test traffic into the network. What is the main 'cost' associated with this method of monitoring?",
        options: [
            "It cannot gather statistics for administration or fine tuning.",
            "It is limited to the physical layer and cannot monitor protocols.",
            "It is unable to measure performance on-demand.",
            "It imposes extra traffic and can distort the true behavior of the network."
        ],
        type: 'single',
        marks: 1.0,
    },
    {
        id: 9,
        text: "Which component of a Network Management System (NMS) is responsible for providing the 'generic/basic functionality' used to manage diverse network devices?",
        options: ["The query language (SQL)", "The set of applications built on top", "The platform (architecture)", "The Management Information Base (MIB)"],
        type: 'single',
        marks: 1.0,
    },
    {
        id: 10,
        text: "Performance management involves setting utilization thresholds. What is the primary reason for performing simulations as the final step in the performance management process?",
        options: [
            "To collect real-time data on current device utilization.",
            "To eliminate the need for statistical analysis and workload modeling.",
            "To automatically bill users based on their peak bandwidth consumption.",
            "To determine how the network can be altered to maximize performance."
        ],
        type: 'single',
        marks: 1.0,
    },
    {
        id: 11,
        text: "In the context of network storage, which of the following is a key characteristic of Network Attached Storage (NAS)?",
        options: [
            "It is a special-purpose server that offers cross-platform file sharing.",
            "It uses a dedicated high-speed fiber-based interconnect separate from the LAN.",
            "It communicates primarily using encapsulated SCSI protocols.",
            "It represents a move back to the centralized mainframe host storage model."
        ],
        type: 'single',
        marks: 1.0,
    },
    {
        id: 12,
        text: "According to the ISO framework, which area of network management is responsible for identifying sensitive information and finding vulnerabilities in access points?",
        options: ["Fault Management", "Security Management", "Accounting Management", "Configuration Management"],
        type: 'single',
        marks: 1.0,
    },
    {
        id: 13,
        text: "A Network Management System (NMS) platform can use three different architectures. Which architecture is designed to distribute management tasks across multiple levels or locations?",
        options: ["Centralized", "Encapsulated", "Sequential", "Hierarchical or Distributed"],
        type: 'single',
        marks: 1.0,
    },
    {
        id: 14,
        text: "What is the primary goal of the Network Management process as it relates to the role of a Network Engineer?",
        options: [
            "To prioritize the budget over the organization's communication needs.",
            "To help network engineers deal with the complexity of data networks.",
            "To ensure that all of network errors are resolved automatically.",
            "To automate all network expansion so engineers are no longer needed."
        ],
        type: 'single',
        marks: 1.0,
    },
    {
        id: 15,
        text: "When mapping the Application Layer during a network audit, which of the following is specifically identified as a target for documentation?",
        options: ["Bridge Configuration Management Information", "Policies and Licenses", "IP address duplicate detection", "Fiber-based high-speed interconnects"],
        type: 'single',
        marks: 1.0,
    },
    {
        id: 16,
        text: "Which benefit of a Storage Area Network (SAN) makes it particularly suitable for organizations with sporadic needs for higher storage capacity?",
        options: ["Reduced dependency on Fiber-based interconnects", "Exceptional scalability", "Lower initial implementation cost compared to NAS", "Elimination of the need for RAID configurations"],
        type: 'single',
        marks: 1.0,
    },
    {
        id: 17,
        text: "Configuration management involves a three-step cycle of data handling. Which step is specifically responsible for maintaining an up-to-date inventory and producing reports?",
        options: ["Polling", "Storing", "Modifying", "Gathering"],
        type: 'single',
        marks: 1.0,
    },
    {
        id: 18,
        text: "What is one of the primary reasons for the 'move back to the central storage model' seen in modern Storage Area Networks (SANs)?",
        options: [
            "To reduce the cost of fiber-based high-speed switches and hubs.",
            "To utilize the existing Ethernet LAN infrastructure for all storage traffic.",
            "To address the problem of isolated storage devices connected to individual machines.",
            "To decrease the need for backup and recovery processes."
        ],
        type: 'single',
        marks: 1.0,
    },
    {
        id: 19,
        text: "The ISO Performance Management process suggests analyzing relevant data through workload modeling. What is a typical 'utilization' metric measured in this context?",
        options: ["Vendor support response times", "Bandwidth and Throughput of links", "Names of contractors working on the network", "Number of application licenses remaining"],
        type: 'single',
        marks: 1.0,
    },
    {
        id: 20,
        text: "Within an NMS platform, the Management Information Base (MIB) functions alongside which other component to allow for data retrieval?",
        options: ["A query language", "An event log", "A user interface", "A network map"],
        type: 'single',
        marks: 1.0,
    },
    {
        id: 21,
        text: "Passive monitoring is characterized by its observational nature. Unlike active monitoring, what is its primary effect on network performance?",
        options: [
            "It is faster at detecting 'on-demand' performance spikes.",
            "It generates periodic test packets to ensure links are active.",
            "It does not add any overhead or distort the network behavior.",
            "It requires the use of centralized NMS architecture to function"
        ],
        type: 'single',
        marks: 1.0,
    },
    {
        id: 22,
        text: "Which specific protocol is cited as being used for the purpose of 'managing network devices' in the monitoring and analysis slides?",
        options: ["RIP (Routing Information Protocol)", "ICMP (Internet Control Message Protocol)", "SNMP (Simple Network Management Protocol)", "LDAP (Lightweight Directory Access Protocol)"],
        type: 'single',
        marks: 1.0,
    },
    {
        id: 23,
        text: "In the Fault Management process, what is the 'illusion' that a well-managed network maintains for its users?",
        options: ["Complete and continuous connectivity.", "Total absence of any network hardware.", "Zero-cost network utilization.", "Unlimited bandwidth availability."],
        type: 'single',
        marks: 1.0,
    },
    {
        id: 24,
        text: "When measuring network traffic, which category of monitoring allows you to see 'Who is talking to who?'",
        options: ["Protocols", "Connections/Conversations", "Errors", "Number of Nodes"],
        type: 'single',
        marks: 1.0,
    },
    {
        id: 25,
        text: "A Storage Area Network (SAN) identifies its 'Storage Medium' primarily as which of the following?",
        options: ["Virtual SCSI Interconnect", "Disk/RAID", "Remote Terminal FTAM", "ASCII files"],
        type: 'single',
        marks: 1.0,
    },
    {
        id: 26,
        text: "Which step in the Performance Management process involves workload modeling and statistical analysis?",
        options: ["Monitoring error rates", "Analyzing relevant data", "Setting utilization thresholds", "Collecting data on current utilization"],
        type: 'single',
        marks: 1.0,
    },
    {
        id: 27,
        text: "Network Attached Storage (NAS) is often preferred for offloading specific tasks. Which task is explicitly mentioned as being 'taken off' the network server by NAS?",
        options: [
            "Manual collection of configuration data",
            "High-bandwidth file-serving tasks",
            "Vulnerability scanning of access points",
            "Physical layer connectivity reporting"
        ],
        type: 'single',
        marks: 1.0,
    }
];

const correctAnswers: Record<number, string> = {
    1: "Accounting Management",
    2: "It may not facilitate effective fault management due to its reactive nature.",
    3: "Encapsulated SCSI",
    4: "Physical, Data link, and Network layers",
    5: "To identify trends and determine the effectiveness of configuration changes.",
    6: "It is essential for day-to-day management tasks and authorizing purchases.",
    7: "It involves higher administrative overheads and requires learning a query language.",
    8: "It imposes extra traffic and can distort the true behavior of the network.",
    9: "The platform (architecture)",
    10: "To determine how the network can be altered to maximize performance.",
    11: "It is a special-purpose server that offers cross-platform file sharing.",
    12: "Security Management",
    13: "Hierarchical or Distributed",
    14: "To help network engineers deal with the complexity of data networks.",
    15: "Policies and Licenses",
    16: "Exceptional scalability",
    17: "Storing",
    18: "To address the problem of isolated storage devices connected to individual machines.",
    19: "Bandwidth and Throughput of links",
    20: "A query language",
    21: "It does not add any overhead or distort the network behavior.",
    22: "SNMP (Simple Network Management Protocol)",
    23: "Complete and continuous connectivity.",
    24: "Connections/Conversations",
    25: "Disk/RAID",
    26: "Analyzing relevant data",
    27: "High-bandwidth file-serving tasks"
};

export default function ExamPage() {
    const [view, setView] = useState<'home' | 'quiz' | 'results'>('home');
    const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
    const [timeLeft, setTimeLeft] = useState(3600); // 1:00:00 in seconds
    const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});

    const currentQuestion = mockQuestions[currentQuestionIdx];

    useEffect(() => {
        if (view !== 'quiz') return;
        const timer = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(timer);
    }, [view]);

    useEffect(() => {
        if (timeLeft === 0 && view === 'quiz') {
            handleSubmit();
        }
    }, [timeLeft, view]);

    const formatTime = (seconds: number) => {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        return `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    };

    const handleOptionChange = (questionId: number, option: string) => {
        if (view !== 'quiz') return;
        setSelectedAnswers(prev => ({
            ...prev,
            [questionId]: option
        }));
    };

    const handleSubmit = () => {
        setView('results');
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

    if (view === 'home') {
        return (
            <div className="container" style={{ backgroundColor: '#fff', minHeight: '100vh', color: '#000' }}>
                {renderHeader()}
                <main className="home-container">
                    <div className="breadcrumb">
                        Dashboard / My courses / <span>MID Examination</span>
                    </div>

                    <div className="subject-hierarchy">
                        <h2 className="exam-category">MID Examination</h2>
                        <h3 className="sub-category">CSNE - Computer Systems & Network Engineering</h3>
                    </div>

                    <div className="module-card">
                        <h1 className="module-title">DSNM - Distributed Systems & Network Management</h1>

                        <div className="practice-notice">
                            <p><strong>Important:</strong> This examination environment is a comprehensive simulation designed to emulate the official SLIIT exam experience, allowing students to practice under realistic conditions.</p>
                        </div>
                        <div style={{ fontSize: '0.85rem', color: '#666', marginTop: '-15px', marginBottom: '25px', fontStyle: 'italic', padding: '0 15px' }}>
                            <strong>Data Privacy Assurance:</strong> This platform is designed solely for educational purposes. We do not collect, store, or transmit any personal data, session information, or examination results.
                        </div>

                        <div className="instructions-card">
                            <h4>Exam Instructions:</h4>
                            <ul className="instructions-list">
                                <li><strong>Time Limit:</strong> 1 hour (60 minutes)</li>
                                <li><strong>Total Questions:</strong> {mockQuestions.length}</li>
                                <li><strong>Auto-Submission:</strong> The quiz will automatically submit when the timer hits zero.</li>
                                <li><strong>Format:</strong> Multiple choice questions.</li>
                                <li>Ensure you have a stable internet connection before starting.</li>
                            </ul>
                        </div>

                        <div style={{ textAlign: 'center', marginTop: '40px' }}>
                            <button className="start-btn" onClick={() => setView('quiz')}>
                                Start Attempt
                            </button>
                        </div>
                    </div>
                </main>
            </div>
        );
    }

    if (view === 'results') {
        const score = Object.keys(correctAnswers).reduce((acc, qId) => {
            return acc + (selectedAnswers[Number(qId)] === correctAnswers[Number(qId)] ? 1 : 0);
        }, 0);

        return (
            <div className="container" style={{ backgroundColor: '#fff', minHeight: '100vh', color: '#000' }}>
                {renderHeader()}

                <main className="main-content" style={{ display: 'block', maxWidth: '1000px', margin: '40px auto' }}>
                    <div className="results-header">
                        <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>Exam Summary</h2>
                        <p style={{ fontSize: '1.2rem', color: '#666' }}>Your score: {score} / {mockQuestions.length} ({(score / mockQuestions.length * 100).toFixed(1)}%)</p>
                    </div>

                    {mockQuestions.map((q) => {
                        const isCorrect = selectedAnswers[q.id] === correctAnswers[q.id];
                        return (
                            <div key={q.id} className="result-item">
                                <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>Question {q.id}: {q.text}</p>
                                <p style={{ fontSize: '0.95rem' }}>Your answer: <span style={{ fontWeight: 500 }}>{selectedAnswers[q.id] || '(No answer provided)'}</span></p>
                                {!isCorrect && (
                                    <p style={{ fontSize: '0.95rem', color: '#666', marginTop: '5px' }}>Correct answer: {correctAnswers[q.id]}</p>
                                )}
                                <div className={isCorrect ? "result-correct" : "result-wrong"}>
                                    {isCorrect ? "✓ Correct" : "✗ Incorrect"}
                                </div>
                            </div>
                        );
                    })}

                    <a
                        href="https://wa.me/94713910417?text=I%20have%20an%20inquiry%20regarding%20my%20exam%20results."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="float-enquiry-btn"
                    >
                        Inquiry
                    </a>
                </main>
            </div>
        );
    }

    return (
        <div className="container" style={{ backgroundColor: '#fff', minHeight: '100vh', color: '#000' }}>
            {renderHeader()}

            <div style={{ padding: '10px 20px', backgroundColor: '#fff', fontSize: '0.8rem', color: '#666' }}>
                Dashboard / My courses / MID Examination / CSNE / <span>DSNM Quiz</span>
            </div>

            <main className="main-content">
                <aside className="left-sidebar">
                    <div className="question-status-box">
                        <p style={{ fontWeight: 'bold' }}>Question {currentQuestion.id}</p>
                        <p style={{ fontSize: '0.8rem', color: '#666' }}>
                            {selectedAnswers[currentQuestion.id] ? 'Answered' : 'Not yet answered'}
                        </p>
                        <p style={{ fontSize: '0.8rem', color: '#666', marginBottom: '10px' }}>Marked out of {currentQuestion.marks.toFixed(2)}</p>
                        <div style={{ fontSize: '0.8rem', color: '#666', cursor: 'pointer' }}>
                            🚩 Flag question
                        </div>
                    </div>
                </aside>

                <section className="question-area">
                    <div className="question-box">
                        <p style={{ marginBottom: '20px', fontSize: '1.1rem' }}>{currentQuestion.text}</p>
                        <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '15px' }}>
                            Select one:
                        </p>
                        {currentQuestion.options.map((opt, i) => (
                            <div key={i} className="option">
                                <input
                                    type="radio"
                                    id={`opt-${i}`}
                                    name={`quiz-opt-${currentQuestion.id}`}
                                    checked={selectedAnswers[currentQuestion.id] === opt}
                                    onChange={() => handleOptionChange(currentQuestion.id, opt)}
                                    style={{ width: '18px', height: '18px' }}
                                />
                                <label htmlFor={`opt-${i}`} style={{ fontSize: '1rem' }}>{opt}</label>
                            </div>
                        ))}
                    </div>
                    {currentQuestionIdx === mockQuestions.length - 1 ? (
                        <button
                            className="next-button"
                            onClick={handleSubmit}
                            style={{ backgroundColor: '#c62828' }}
                        >
                            Finish attempt
                        </button>
                    ) : (
                        <button
                            className="next-button"
                            onClick={() => setCurrentQuestionIdx((prev) => (prev + 1) % mockQuestions.length)}
                        >
                            Next page
                        </button>
                    )}
                </section>

                <aside className="right-sidebar">
                    <div className="timer-section">
                        <h3 style={{ fontSize: '1.1rem', marginBottom: '10px' }}>≡ Quiz navigation</h3>
                        <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '10px' }}>Finish attempt ...</p>
                        <p style={{ fontWeight: 'bold' }}>Time left {formatTime(timeLeft)}</p>
                    </div>
                    <div className="quiz-nav-grid">
                        {mockQuestions.map((q, i) => (
                            <div
                                key={q.id}
                                className={`nav-item ${currentQuestionIdx === i ? 'active' : ''} ${selectedAnswers[q.id] ? 'answered' : ''}`}
                                onClick={() => setCurrentQuestionIdx(i)}
                            >
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
