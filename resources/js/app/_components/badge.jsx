export default function Badge({
    label = "Badge",
    variant = "primary", // primary | secondary | success | warning | danger
    outlined = false,
    showDot = true,
    className = "",
}) {
    const base =
        "inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 text-xs font-medium";

    const variants = {
        primary: {
            solid:
                "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
            outline:
                "text-blue-600 border border-blue-400 inset-ring  inset-ring-blue-300 dark:text-blue-300 dark:inset-ring-blue-700",
            dot: "fill-blue-500 dark:fill-blue-400",
        },
        secondary: {
            solid:
                "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300",
            outline:
                "text-gray-600 border border-gray-400 inset-ring  inset-ring-gray-300 dark:text-gray-300 dark:inset-ring-gray-700",
            dot: "fill-gray-500 dark:fill-gray-400",
        },
        success: {
            solid:
                "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
            outline:
                "text-green-600 border border-green-400 inset-ring  inset-ring-green-300 dark:text-green-300 dark:inset-ring-green-700",
            dot: "fill-green-500 dark:fill-green-400",
        },
        warning: {
            solid:
                "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300",
            outline:
                "text-yellow-600 border border-yellow-400 inset-ring inset-ring-yellow-300 dark:text-yellow-300 dark:inset-ring-yellow-700",
            dot: "fill-yellow-500 dark:fill-yellow-400",
        },
        danger: {
            solid:
                "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
            outline:
                "text-red-600 border border-red-400 inset-ring inset-ring-red-300 dark:text-red-300 dark:inset-ring-red-700",
            dot: "fill-red-500 dark:fill-red-400",
        },
    };

    const style = variants[variant] ?? variants.primary;

    return (
        <span
            className={`${base} ${
                outlined ? style.outline : style.solid
            } ${className}`}
        >
            {showDot && (
                <svg
                    viewBox="0 0 6 6"
                    aria-hidden="true"
                    className={`size-1.5 ${style.dot}`}
                >
                    <circle r={3} cx={3} cy={3} />
                </svg>
            )}
            {label}
        </span>
    );
}
