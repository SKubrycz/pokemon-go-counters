import { Type } from '../getTypes';

type ChooseTypeFunction = (type: Type | null) => void;

interface ComponentProps {
    typesArray: Type[];
    selectedImage: (Type | null)[] | null;
    chooseType: ChooseTypeFunction;
};

const TypesToChoose: React.FC<ComponentProps> = ({ typesArray, selectedImage, chooseType }) => {


    return (
        <div className='types-all'>
            {typesArray.map((type, index) => {
              let condition: boolean = type.title === selectedImage?.[0]?.title || type.title === selectedImage?.[1]?.title;

              let colorAdjust: string;

              switch(type.color) {
                case '#414141': 
                  colorAdjust = '#969696';
                  break;
                case '#204CA1': 
                  colorAdjust = '#3267CF';
                  break;
                case '#828282':
                  colorAdjust = '#C2C2C2';
                  break;
                case '#436E81': 
                  colorAdjust = '#5E9AB5';
                  break;
                default:
                  colorAdjust = type.color;
              }

              const style = {
                filter: (condition) ? `drop-shadow(0px 0px 20px ${colorAdjust})` : '',
                boxShadow: (condition) ? `0px 0px 0px 2px ${type.color}` : 'none',
                borderRadius: (condition) ? `100%` : '0',
              }

              return (
                <img
                  key={index}
                  className={`types-img`}
                  src={type.src}
                  onClick={() => chooseType(type)}
                  title={type.title}
                  alt={type.alt}
                  style={style}
                />
              ); 
              }
              )}
            </div>
    );
}

export default TypesToChoose;