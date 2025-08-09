const useKaboom = async () => {
    const kaboom = (await import("kaboom")).default;
    const k = kaboom({
        global: true,
        width: 640,
        height: 480,
        scale: 2,
        background: [0, 0, 0, 1],
        debug: true,
    });
    return k;
};
export default useKaboom;
