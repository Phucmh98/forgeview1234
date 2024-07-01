import React, { useEffect } from 'react';

const DataDisplay = ({ data = [], name }: { data?: number[], name: string }) => {
    useEffect(() => {
        // Ghi log khi data hoặc name thay đổi
        console.log('Data has changed:', data);
    }, [data, name]);

    // In ra giá trị của data trong render
    console.log('Rendering DataDisplay with data:', data);

    return (
        <div>
            <h3>{name}</h3>
            <div>
                {/* Hiển thị dữ liệu trong giao diện */}
                {data?.length > 0 ? (
                    data.map((num) => (
                        <span key={num} style={{ margin: '0 5px' }}>{num}</span>
                    ))
                ) : (
                    <span>No data available</span>
                )}
            </div>
        </div>
    );
};

export default DataDisplay;
