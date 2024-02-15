import type { PropType } from "vue";


interface ExampleProps {
    data: string[];
    handleExampleClickedData:(item:string) => void;
  }

export default defineComponent({
    props:{
        data:{
            type: Array as () => string[],
            required: true,   
        },
        handleExampleClickedData:{
            type : Function as PropType<(item:string) => void>,
            required: true
        }
    },
    setup(props:ExampleProps, ctx){
        const data = props.data;
        const handleClickedData = (data:string)=>{
            props.handleExampleClickedData(data);
        }
       return {
        data,
        handleClickedData
       }
    },
    render(){
        return <div>
            {
                this.data.map((item,index)=>{
                    return <div key={index}>
                        <button onClick={()=>{this.handleClickedData(item)}}>{item}</button>
                        </div>
                })
            }
        </div>
    }
})