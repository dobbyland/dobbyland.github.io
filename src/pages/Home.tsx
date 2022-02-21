import Button from 'components/atoms/Button';

const Home = () => {
    return (
        <>
            <p>홈입니다.</p>
            <Button color={`blue`} onClick={()=>alert(1)}>버튼</Button>
        </>
    )
};

export default Home;