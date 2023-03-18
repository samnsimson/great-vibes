export const resetFormFields = (obj: { [x: string]: any }) => {
    return Object.keys(obj).reduce((a, v) => ({ ...a, [v]: v }), {});
};

export const formatNumber = (num: number): string => {
    return num.toLocaleString("en-IN");
};

export const classNames = (...classes: (null | undefined | string | object)[]) => {
    return classes
        .map((cls) =>
            cls && typeof cls === "object"
                ? Object.entries(cls)
                      .map(([key, value]) => value && key)
                      .filter(Boolean)
                      .join(" ")
                : cls
        )
        .join(" ");
};
