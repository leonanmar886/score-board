'use client';

export default function Button({
    onClick,
    children,
    disabled
}: {
    onClick: () => void;
    children: React.ReactNode;
    disabled?: boolean;
}) {
    return (
        <button
            className="bg-blue-500 w-40 text-white rounded p-2 hover:bg-blue-600 transition duration-200"
            onClick={onClick}
        >   disabled={disabled}
            {children}
        </button>
    );
}