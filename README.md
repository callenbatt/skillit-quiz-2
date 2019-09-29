# Quiz App

This is a simple quiz application built in react using firebase services.

## Glossary

The following terms are defined here for reference in the code base, as well as in general language usage. All references to glossary terms in the code are converted to camelCase.


- **Users** may be one of two roles, **Teacher** and **Student**

    - **Teachers** are responsible for designing and administering the quiz. They have access to both the **Admin** and **Giver** views.

    - **Students** are participants in the quiz. They have access only to the **Taker** view.

- **Views** are single-page UIs which allow **Users** to interact with Quizes. 

    - **Admin** allows **Teachers** to create, design, organize, administer, track, and review their quizes on their personal device. 

    - **Giver** allows **Teachers** to display the current quiz state to **Students** on a classroom device.

    - **Taker** allows **Students** to participate in the quiz on their personal devices.

- **Quizes** are collections of **Questions** given by **Teachers** to **Students**. Each **Quiz** contains to following properties:

    - **Questions** are simple questions **Teachers** ask **Students**, usually one sentence in length.

        - **Options** are a set of multiple choice answers to a given **Question**, usually one word in length and structured by "A", "B", "C", or "D" labels. **Students** can choose one option in a set.

        - **Polls** are a collection of answers from **Students** to a given **Question**. Each item in the set contains a reference to a Student as well as their Option choice. 
    
    - **State** references the current activity in the **Quiz**, and controls the **Giver** & **Taker Views**.

        - **Inactive** implies the quiz has not yet begun.
            - Giver view is *inactive*
            - Taker view is *inactive*

        - **Idle** implies the quiz is active, but no question is being asked.
            - Giver view is *idle*
            - Taker view is *idle*

        - **Ready** implies a question is about to become active.
            - Giver view is *ready*
            - Taker view is *ready*

        - **Active** implies the current question (by **QuestionIndex**) is active for the allotted time
            - Giver view is *active*, and displays options and time
            - Taker view is *active*, allows interaction to select option > confirm > confirm submission

        - **Analysis** implies the time has expired on the current question.
            - Giver view is *analysis*, and displays statistics of the current question's poll
            - Taker view is *analysis*, and displays personal statistics related to the current question's poll
        
        - **Complete** implies the current quiz is complete
            - Giver view is *complete*
            - Taker view is *complete*

    - **Question Index** references the current **Question** in the **Quiz**.

- **Lifecycle** refers to the sequece of **State** events that take place during the **Quiz**

    Inactive ↴

        Idle ↴

            Ready ↴

            Active ↴

            Analysis ↻

    Complete
    

