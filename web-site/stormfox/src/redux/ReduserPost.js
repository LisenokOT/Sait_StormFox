// import axios from 'axios'
// const response =axios.get('http://localhost', {
//                 params: {
//                     group: 'ИКБО-02-20'
//                 },
//                 headers: {
//                     'Content-Type': 'application/json',
//                 }
//             });

let initialState = {postData: [
    {id_elem:1, like:2, post_text:'Продолжаем тему резервного копирования данных. Сегодня рассмотрим более современные способы создания бэкапа.Бесконечно-инкрементальный бэкап — это метод создания резервной копии данных, при котором каждый последующий бэкап содержит только инкременты. Подразумевается, что после первоначального полного резервного копирования, будут создаваться только инкрементальные бэкапы. Это позволяет сократить время создания бэкапа и сэкономить дисковое пространство. Однако при восстановлении данных может потребоваться больше времени, так как нужно восстановить все изменения. Синтетический полный бэкап — это метод создания полной копии данных, используя уже существующие инкрементальные бэкапы. Он периодически воссоздаёт полный бэкап из инкрементальных. Это позволяет сократить время создания полной копии и уменьшить нагрузку на сеть и хранилище данных. Смарт-бэкап — этот метод позволяет комбинировать полный, дифференциальный и инкрементальный бэкапы. Это позволяет сократить время создания бэкапа и снизить нагрузку на сеть и хранилище данных. Кроме того, данный метод может самостоятельно управлять хранилищем. Каждый из этих методов имеет свои преимущества и недостатки, поэтому выбор метода зависит от требований к безопасности данных и от конкретных потребностей. Важно помнить, что регулярное создание резервных копий данных — это необходимое условие для обеспечения безопасности информации. '}, 
    {id_elem:2, like:5, post_text:'Резервное копирование - это процесс создания копии данных, или сокращённо - бекап. Как говорится, люди делятся на два типа, кто не делает бекапы и те кто уже делает.\br При кажущейся очевидности многие пренебрегают данным способом обеспечения безопасности данных.\nТак зачем же делать бекапы?\nИх делают для снижения риска потери данных. Так как различные события могут угрожать целостности данных. От банального удаления по ошибке, взлома и уничтожения злоумышленником, до выхода из строя жёсткого диска.\n\nИтак, польза бекапов понятна, но возникает новая проблема, как их создавать?\nОтветом могут стать десятки и сотни специализированных программ, которые лучше выбирать с учётом своей операционной системы и потребностей. Сложностей с использованием не должно быть, так как существует огромное количество руководств и советов для новичков.\n\nВажно автоматизировать процесс бекапов, так как легко забыть запускать его самостоятельно.\n\nТакже стоит уделить внимание тому, куда сохраняется бекап. Дело в том, что сохранять бекап нужно на другой диск, иначе в нём мало смысла. Существуют различные варианты, от второго диска или флешки, до облачного диска. Я рекомендовал бы второй вариант, так как у компаний, которые предоставляют услуги облачного хранилища надежное хранение данных и риск потери данных в облаке близится к нулю, а значит, бекап обязательно сохранится.\n\nВ следующей части планирую затронуть виды резервного копирования и их особенности.'}, 
    {id_elem:3, like:3, post_text:'Сегодня немного об обучении нейросети. Чтобы нейросеть могла выполнять поставленные перед ней задачи, ее нужно обучить. Это довольно долгий и сложный этап в ее разработке, однако один из самых важных. Для обучения нейросети нужен запрос с верным ответом на него. Сейчас есть много возможностей для обучения нейросетей. Это базы, где представлены запросы и ответы на эти запросы. Это базы с картинками, по которым нейросеть учится определять, что на картинке находится. База с голосовыми записями, где нейросеть учится отделять шум от голоса и определяет, что именно сказал человек. Есть даже псевдонейросеть, созданная для обучения других нейросетей. Даже хорошо обученная нейросеть не всегда правильно выполняет все задачи, она может допустить ошибку, перепутать или просто не понять. Поэтому когда нейросеть выполняет важную работу нужно следить за качеством выполнения. С обучением нейросети могут возникнуть две основные проблемы: недообучение и переобучение. Недообучение связано с использованием слишком простых примеров для обучения, в связи с чем нейросеть ошибается больше, чем должна. Переобучение напротив связано с использованием при обучении сложных, но однотипных примеров, поэтому нейросеть много ошибается на примерах, которых не было в обучении. Значит, обучение нейросети нужно проводить не слишком долго, правильно подобрав для этого обучающую выборку.'}, 
    {id_elem:4, like:1, post_text:'Как работает нейросеть, в чем её отличие от программы. Нейросеть - это направление искусственного интеллекта, активно применяющееся в решении лёгких задач. Строение нейросети напоминает строение нашей нервной системы: она состоит из нейронов, которые объединены синапсами. Самая простая нейросеть имеет всего один слой и несколько основных типов нейронов: принимающие информацию, обрабатывающие ее и выдающие результат. У сложной нейросети слоёв может быть много. '}
    ],
    newPostText: ''
}

const ReduserPost = (state = initialState, action) =>{
    if (action.type === 'ADD-POST'){
        let newPost = {
            id_elem: 5,
            post_text: state.newPostText,
        };
        state.postData.push(newPost)
        state.newPostText = ''
        return state;
    } else if (action.type === 'UPDATE-POST'){
        state.newPostText = action.newText
        return state;
    } else if (action.type === 'LIKE-POST'){
        state.like += 1;
        return state;
    }
    else
        return state;
}

export const addPostActionCreator = () =>({type: 'ADD-POST'})
export const likePostActionCreator = () =>({type: 'LIKE-POST'})
export const updatePostCreator = (text) =>({type: 'UPDATE-POST', newText: text})
export default ReduserPost;