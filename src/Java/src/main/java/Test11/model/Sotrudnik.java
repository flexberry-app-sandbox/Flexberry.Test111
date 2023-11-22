package Test11.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Test11.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Сотрудник
 */
@Entity(name = "IISTest11Сотрудник")
@Table(schema = "public", name = "Сотрудник")
public class Sotrudnik {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Фамил")
    private String фамил;

    @Column(name = "ТабНом")
    private String табном;

    @Column(name = "НомПасп")
    private Integer номпасп;

    @Column(name = "Имя")
    private String имя;

    @Column(name = "Отчест")
    private String отчест;

    @Column(name = "Серия")
    private Integer серия;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Dolzhnosti")
    @Convert("Dolzhnosti")
    @Column(name = "Должности", length = 16, unique = true, nullable = false)
    private UUID _dolzhnostiid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Dolzhnosti", insertable = false, updatable = false)
    private Dolzhnosti dolzhnosti;


    public Sotrudnik() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getФамил() {
      return фамил;
    }

    public void setФамил(String фамил) {
      this.фамил = фамил;
    }

    public String getТабНом() {
      return табном;
    }

    public void setТабНом(String табном) {
      this.табном = табном;
    }

    public Integer getНомПасп() {
      return номпасп;
    }

    public void setНомПасп(Integer номпасп) {
      this.номпасп = номпасп;
    }

    public String getИмя() {
      return имя;
    }

    public void setИмя(String имя) {
      this.имя = имя;
    }

    public String getОтчест() {
      return отчест;
    }

    public void setОтчест(String отчест) {
      this.отчест = отчест;
    }

    public Integer getСерия() {
      return серия;
    }

    public void setСерия(Integer серия) {
      this.серия = серия;
    }


}