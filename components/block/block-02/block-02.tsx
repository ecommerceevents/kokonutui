interface Block02Props {
    children: React.ReactNode;
}

export default function Block02({ children }: Block02Props) {
    return (
        <div className="relative w-full min-h-screen bg-white dark:bg-black/5 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-zinc-50/50 dark:bg-zinc-900/50" />
            </div>
            {children}
        </div>
    );
} 