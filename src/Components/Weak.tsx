interface ComponentProps {
    weak: string[] | undefined;
}

const Weak: React.FC<ComponentProps> = ({ weak }) => {

    return (
        <div className='weak-container'>
            <h4>Weak Against:</h4>
            <div className='counters-img-container' key={Math.floor(Math.random()*10)}>
              {
                weak && weak.map((type, index) => {
                  return (
                    <img
                      key={index}
                      className='types-img'
                      src={weak?.[index]}
                      title={type?.match(/media\/(.*?)\./)?.[1]}
                      style={{
                        animation: `.3s chosen 1`,
                      }}
                    />
                  )
                })
              }
              {
                /* selectedImage && selectedImage[1]?.weakAgainst.map((type, index) => {
                  let str: (string[] | undefined)[] = [
                    selectedImage?.[1]?.strongAgainst,
                    selectedImage?.[0]?.strongAgainst,
                    selectedImage?.[0]?.weakAgainst,
                  ];
                  return mapCounters(str, selectedImage?.[1]?.weakAgainst?.[index], index);
                }) */
              }
            </div>
          </div>
    );
}

export default Weak;
