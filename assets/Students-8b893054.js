import{c as b,u as g}from"./StudentsStore-5018585b.js";import{d as u,m as S,c as a,e as t,F as i,i as f,h as p,o as l,t as s,n as _,k,q as C,v as x}from"./index-75af12b8.js";import"./UserAdapter-f2f88c13.js";const N={class:"table table-striped table-hover"},V=t("thead",null,[t("tr",null,[t("th",{scope:"col"},"#"),t("th",{scope:"col"},"Nombre"),t("th",{scope:"col"},"Apellido"),t("th",{scope:"col"},"Correo"),t("th",{scope:"col"},"Acciones"),t("th",{scope:"col"},"Cursos")])],-1),E=t("td",null,[t("span",{class:"badge rounded-pill bg-danger"},"Eliminar"),C(s(" ")+" "),t("span",{class:"badge rounded-pill bg-warning"},"Editar")],-1),v=["title"],y=u({__name:"TableStudents",props:{students:null},setup(r){const o=r,c=S(()=>{var n;return(n=o.students.data)==null?void 0:n.map(d=>b(d))});return(n,d)=>{const m=x("router-link");return l(),a("table",N,[V,t("tbody",null,[(l(!0),a(i,null,f(p(c),(e,h)=>(l(),a("tr",{key:e.id},[t("td",null,s(h+1),1),t("td",null,s(e.name),1),t("td",null,s(e.lastName),1),t("td",null,s(e.email),1),E,t("td",null,[_(m,{to:{name:"StudentCourses",params:{id:e.id}}},{default:k(()=>[t("span",{class:"badge rounded-pill bg-success","data-bs-toggle":"tooltip","data-bs-placement":"left",title:"Ver los cursos asociados a "+e.name},"Ver",8,v)]),_:2},1032,["to"])])]))),128))])])}}}),A=t("h1",null,"Estudiantes",-1),L=u({__name:"Students",setup(r){const o=g();return o.getStudentsList(),(c,n)=>(l(),a(i,null,[A,_(y,{students:p(o).students},null,8,["students"])],64))}});export{L as default};
