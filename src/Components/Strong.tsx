interface ComponentProps {
    strong: string[] | undefined;
}

const Strong: React.FC<ComponentProps> = ({ strong }) => {


    return (
        <div className='strong-container'>
            <h4>Strong Against:</h4>
            <div className='counters-img-container' key={Math.floor(Math.random()*10)}>
              {
                strong && strong.map((type, index) => {
                  return (
                    <img
                    key={index}
                    className='types-img'
                    src={strong?.[index]}
                    title={type?.match(/media\/(.*?)\./)?.[1]}
                    style={{
                      animation: `.3s chosen 1`,
                    }}
                  />
                  )
                })
              }
              {
                  /* if (selectedImage?.[1]?.strongAgainst?.[index] && 
                  selectedImage?.[0]?.strongAgainst.includes(selectedImage?.[1]?.strongAgainst?.[index])) {
                    return   
                  } else {
                    return (
                      <img
                        key={index}
                        className='types-img'
                        src={selectedImage?.[1]?.strongAgainst?.[index]}
                      ></img>
                    )
                  }
                }) */
              }
            </div>
        </div>
    );
}

export default Strong;
