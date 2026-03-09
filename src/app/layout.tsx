import './globals.css'
import ContextMenuBlocker from '@/components/ContextMenuBlocker'

export const metadata = {
    title: 'SLIIT Netexam',
    description: 'Online Exam Platform',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <ContextMenuBlocker />
                <div className="mobile-restriction-overlay">
                    <div className="mobile-restriction-content">
                        <div className="mobile-restriction-icon">💻</div>
                        <h1 className="mobile-restriction-title">Desktop Access Only</h1>
                        <p className="mobile-restriction-text">
                            The NetExam examination environment is restricted to desktop devices to ensure academic integrity and provide an optimal testing experience. Please access this portal from a laptop or desktop computer.
                        </p>
                    </div>
                </div>
                {children}
            </body>
        </html>
    )
}
